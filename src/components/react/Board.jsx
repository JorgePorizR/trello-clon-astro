import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Column from "./Column";

const initialData = [
  {
    id: "todo",
    title: "Por hacer",
    tasks: [{ id: "t1", content: "Aprender Astro" }, { id: "t2", content: "Leer documentación de dnd-kit" }]
  },
  {
    id: "in-progress",
    title: "En progreso",
    tasks: [{ id: "t3", content: "Hacer pruebas con Tailwind" }]
  },
  {
    id: "done",
    title: "Completado",
    tasks: [{ id: "t4", content: "Configurar el proyecto" }]
  }
];

export default function Board() {
  const [columns, setColumns] = useState(initialData);

  return (
    <DndContext collisionDetection={closestCenter}>
      <div className="flex gap-4 p-4">
        {columns.map((col) => (
          <Column key={col.id} column={col} />
        ))}
      </div>
    </DndContext>
  );
}
