import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const todos = [
  "My Fist Todo",
  "Learning nextjs",
  "practice prisma",
  "demo closure to the source"
];

async function main() {
  console.log("Seeding started 🚀");

  const todosCreateInput: Prisma.TodoCreateManyInput[] = todos.map((todo) => ({
    title: todo
  }));
  const newTodos = await prisma.todo.createManyAndReturn({
    data: todosCreateInput
  });

  console.log(`Successfully inserted todo data, count: ${newTodos.length} 🎊`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
