import { prisma } from "@/prisma";
import Form from "next/form";

export default async function TodosPage() {
  const todos = await prisma.todo.findMany();

  console.log(todos);

  return (
    <Form action="">
      <ul className="space-y-2">
        {todos.map(({ id, title, isCompleted }) => (
          <li className="flex space-x-2" key={id}>
            <input
              type="checkbox"
              name=""
              id={`${id}-${title}`}
              defaultChecked={isCompleted}
            />
            <label htmlFor={`${id}-${title}`}>{title}</label>
          </li>
        ))}
      </ul>

      <button>Save</button>
    </Form>
  );
}
