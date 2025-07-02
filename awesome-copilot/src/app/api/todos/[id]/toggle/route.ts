import { NextRequest, NextResponse } from "next/server";
import { todoService } from "@/lib/services/todo-service";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
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
    
    const updatedTodo = await todoService.toggleTodoCompletion(id);
    
    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error(`Error toggling todo ${params.id}:`, error);
    return NextResponse.json(
      { error: "Failed to toggle todo completion" },
      { status: 500 }
    );
  }
}
