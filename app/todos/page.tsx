import TakeLongTime from "@/components/todos/take-long-time";
import TodoForm from "@/components/todos/todo-form";
import { Suspense } from "react";

export default async function TodosPage() {
  // const todos = await prisma.todo.findMany({ orderBy: { id: "asc" } });

  const todos = [
    {
      id: 1,
      title: "",
      isCompleted: false
    },
    {
      id: 2,
      title: "Learning nextjs11111",
      isCompleted: false
    },
    {
      id: 3,
      title: "practice prisma 11111",
      isCompleted: false
    },
    {
      id: 4,
      title: "demo closure to the source 1111",
      isCompleted: false
    },
    {
      id: 5,
      title: "My Fist Todo 1 11111",
      isCompleted: false
    },
    {
      id: 6,
      title: "My Fist Todo asdf",
      isCompleted: false
    },
    {
      id: 7,
      title: "My Fist Todo (udpated)",
      isCompleted: false
    },
    {
      id: 8,
      title: "My Fist Todo1111",
      isCompleted: false
    },
    {
      id: 9,
      title: "My Fist Todo1111",
      isCompleted: false
    },
    {
      id: 10,
      title: "My Fist Todo111",
      isCompleted: false
    },
    {
      id: 11,
      title: "testing2",
      isCompleted: false
    },
    {
      id: 12,
      title: "testing...",
      isCompleted: false
    }
  ];
  console.log(todos);

  return (
    <div className="flex space-x-4">
      <TodoForm todos={todos} />
      <Suspense fallback={<p>loading...</p>}>
        <TakeLongTime />
      </Suspense>
    </div>
  );
}
