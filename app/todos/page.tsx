import TakeLongTime from "@/components/todos/take-long-time";
import TodoForm from "@/components/todos/todo-form";
import { prisma } from "@/prisma";
import { Suspense } from "react";

export default async function TodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "asc" } });

  return (
    <div className="flex space-x-4">
      <TodoForm todos={todos} />
      <Suspense fallback={<p>loading...</p>}>
        <TakeLongTime />
      </Suspense>
    </div>
  );
}
