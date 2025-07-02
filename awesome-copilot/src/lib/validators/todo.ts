import { z } from 'zod';

export const TodoPriorityEnum = z.enum(['LOW', 'NORMAL', 'HIGH']);
export type TodoPriority = z.infer<typeof TodoPriorityEnum>;

export const TodoItemSchema = z.object({
  id: z.string().uuid().optional(), // Optional for creation
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z.string().max(500, 'Description must be less than 500 characters').optional(),
  isCompleted: z.boolean().default(false),
  dueDate: z.string().datetime().optional().nullable().or(z.date().optional()),
  priority: TodoPriorityEnum.default('NORMAL'),
  createdAt: z.string().datetime().optional().or(z.date().optional()),
  updatedAt: z.string().datetime().optional().or(z.date().optional()),
});

export const CreateTodoItemSchema = TodoItemSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateTodoItemSchema = TodoItemSchema
  .partial()
  .omit({ id: true, createdAt: true, updatedAt: true })
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export type TodoItem = z.infer<typeof TodoItemSchema>;
export type CreateTodoItem = z.infer<typeof CreateTodoItemSchema>;
export type UpdateTodoItem = z.infer<typeof UpdateTodoItemSchema>;
