import { prisma } from '@/lib/db';
import { type CreateTodoItem, type UpdateTodoItem } from '@/lib/validators/todo';
import { Priority } from '@prisma/client';

export const todoService = {
  /**
   * Get all todo items with optional filtering
   */
  async getAllTodos(options?: {
    completed?: boolean;
    priority?: Priority;
  }) {
    const where: any = {};
    
    if (options?.completed !== undefined) {
      where.isCompleted = options.completed;
    }
    
    if (options?.priority) {
      where.priority = options.priority;
    }
    
    return prisma.todoItem.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  },
  
  /**
   * Get a single todo item by ID
   */
  async getTodoById(id: string) {
    return prisma.todoItem.findUnique({
      where: { id },
    });
  },
  
  /**
   * Create a new todo item
   */
  async createTodo(data: CreateTodoItem) {
    return prisma.todoItem.create({
      data,
    });
  },
  
  /**
   * Update an existing todo item
   */
  async updateTodo(id: string, data: UpdateTodoItem) {
    return prisma.todoItem.update({
      where: { id },
      data,
    });
  },
  
  /**
   * Delete a todo item
   */
  async deleteTodo(id: string) {
    return prisma.todoItem.delete({
      where: { id },
    });
  },
  
  /**
   * Toggle the completion status of a todo item
   */
  async toggleTodoCompletion(id: string) {
    const todo = await prisma.todoItem.findUnique({ where: { id } });
    if (!todo) return null;
    
    return prisma.todoItem.update({
      where: { id },
      data: { isCompleted: !todo.isCompleted },
    });
  },
};
