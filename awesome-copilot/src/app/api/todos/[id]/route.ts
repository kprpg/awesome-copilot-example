import { NextRequest, NextResponse } from "next/server";
import { todoService } from "@/lib/services/todo-service";
import { UpdateTodoItemSchema } from "@/lib/validators/todo";
import { ZodError } from "zod";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    const todo = await todoService.getTodoById(id);
    
    if (!todo) {
      return NextResponse.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(todo);
  } catch (error) {
    console.error(`Error fetching todo ${params.id}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch todo" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    const body = await req.json();
    
    // Check if the todo exists
    const existingTodo = await todoService.getTodoById(id);
    if (!existingTodo) {
      return NextResponse.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }
    
    const todoData = UpdateTodoItemSchema.parse(body);
    const updatedTodo = await todoService.updateTodo(id, todoData);
    
    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error(`Error updating todo ${params.id}:`, error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    
    // Check if the todo exists
    const existingTodo = await todoService.getTodoById(id);
    if (!existingTodo) {
      return NextResponse.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }
    
    await todoService.deleteTodo(id);
    
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(`Error deleting todo ${params.id}:`, error);
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}
