import { prisma } from "@/prisma";
import { Prisma, Todo } from "@prisma/client";
import Form from "next/form";
import { redirect } from "next/navigation";

type Props = {
  todos: Todo[];
};

const createTodo = async (id: number, formData: FormData) => {
  "use server";

  const title = (formData.get("todo") || "") as string;

  const updatedTodo: Prisma.TodoUpdateInput = {
    title
  };

  const todoUpdated = await prisma.todo.update({
    where: { id },
    data: updatedTodo
  });

  console.log(todoUpdated);

  redirect("/todos");
};

export default function TodoForm({ todos }: Props) {
  return (
    <ul className="">
      {todos.map(({ id, title, isCompleted }) => (
        <li key={id}>
          {title}
          <Form action={createTodo.bind(null, id)}>
            <input
              type="checkbox"
              name=""
              id={`${id}-${title}`}
              defaultChecked={isCompleted}
            />
            <input defaultValue={title} name="todo" />
            <button>Save</button>
          </Form>
        </li>
      ))}
    </ul>
  );
}
