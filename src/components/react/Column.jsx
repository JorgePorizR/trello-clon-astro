import Task from "./Task";
import { SortableContext } from "@dnd-kit/sortable";

export default function Column({ column }) {
  return (
    <div className="w-64 bg-gray-200 rounded-lg p-4">
      <h2 className="font-bold mb-2">{column.title}</h2>
      <SortableContext items={column.tasks.map((t) => t.id)}>
        <div className="space-y-2">
          {column.tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
