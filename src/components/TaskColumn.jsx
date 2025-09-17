import TaskCard from "./TaskCard";

export default function TaskColumn({ columnId, title, colorLight, colorDark, tasks, onDelete, onMove }) {
  const handleDrop = (e) => {
    const taskId = e.dataTransfer.getData("text/plain");
    onMove(taskId, columnId);
  };

  // Choose a base accent color for tasks
  const accentColor =
    columnId === "todo"
      ? "red"
      : columnId === "inprogress"
      ? "yellow"
      : "green";

  return (
    <div
      className={`p-4 rounded-2xl min-h-[300px] border shadow-sm ${colorLight} dark:${colorDark}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      {tasks.length === 0 && (
        <p className="text-slate-500 dark:text-slate-400 text-sm italic">
          No tasks
        </p>
      )}
      <div className="flex flex-col gap-3">
        {tasks.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            color={accentColor} // Pass accent color to card
            onDelete={() => onDelete(t.id)}
          />
        ))}
      </div>
    </div>
  );
}
