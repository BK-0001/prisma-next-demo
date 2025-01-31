import { prisma } from "@/prisma";
import { Prisma, Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import Form from "next/form";

type Props = {
  todos: Todo[];
};

const createTodo = async (id: number, formData: FormData) => {
  "use server";

  const isCompleted = formData.get("is-completed");

  const updatedTodo: Prisma.TodoUpdateInput = {
    isCompleted: isCompleted === "on"
  };

  await prisma.todo.update({
    where: { id },
    data: updatedTodo
  });

  revalidatePath("/todos");
};

export default function TodoForm({ todos }: Props) {
  return (
    <ul className="p-4">
      {todos.map(({ id, title, isCompleted }) => (
        <li key={id}>
          <Form className="flex space-x-2" action={createTodo.bind(null, id)}>
            <div className="space-x-2">
              <input
                type="checkbox"
                name="is-completed"
                id={`${id}-${title}`}
                defaultChecked={isCompleted}
              />
              <label htmlFor={`${id}-${title}`}>{title}</label>
            </div>
            <button>SAVE</button>
          </Form>
        </li>
      ))}
    </ul>
  );
}
