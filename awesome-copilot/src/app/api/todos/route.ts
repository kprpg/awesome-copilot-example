import { NextRequest, NextResponse } from "next/server";
import { todoService } from "@/lib/services/todo-service";
import { CreateTodoItemSchema } from "@/lib/validators/todo";
import { ZodError } from "zod";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const completed = searchParams.get("completed");
    const priority = searchParams.get("priority");

    const options: { completed?: boolean; priority?: any } = {};

    if (completed !== null) {
      options.completed = completed === "true";
    }

    if (priority) {
      options.priority = priority;
    }

    const todos = await todoService.getAllTodos(options);
    return NextResponse.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Process the body to handle date fields
    const processedBody = {
      ...body,
      // Convert empty string dates to null
      dueDate: body.dueDate && body.dueDate !== "" ? body.dueDate : null,
    };
    
    const todoData = CreateTodoItemSchema.parse(processedBody);
    
    const newTodo = await todoService.createTodo(todoData);
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
