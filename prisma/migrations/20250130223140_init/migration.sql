-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "todos_title_idx" ON "todos"("title");
