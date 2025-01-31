import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Task({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="p-2 bg-white rounded-md shadow-md cursor-grab"
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      {task.content}
    </div>
  );
}
