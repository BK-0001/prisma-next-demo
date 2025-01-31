import TodoForm from "@/components/todos/todo-form";
import { prisma } from "@/prisma";

export default async function TodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "asc" } });

  return <TodoForm todos={todos} />;
}
