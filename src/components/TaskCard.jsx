// TaskCard.jsx
export default function TaskCard({ task, color, onDelete }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", task.id);
  };

  // Map of colors to Tailwind classes
  const colorMap = {
    red: {
      light: "bg-red-50 border-red-200 text-red-800",
      dark: "dark:bg-red-900/30 dark:border-red-500/40 dark:text-red-200",
      delete: "text-red-600 dark:text-red-400"
    },
    yellow: {
      light: "bg-yellow-50 border-yellow-200 text-yellow-800",
      dark: "dark:bg-yellow-900/30 dark:border-yellow-500/40 dark:text-yellow-200",
      delete: "text-yellow-600 dark:text-yellow-400"
    },
    green: {
      light: "bg-green-50 border-green-200 text-green-800",
      dark: "dark:bg-green-900/30 dark:border-green-500/40 dark:text-green-200",
      delete: "text-green-600 dark:text-green-400"
    },
    blue: {
      light: "bg-blue-50 border-blue-200 text-blue-800",
      dark: "dark:bg-blue-900/30 dark:border-blue-500/40 dark:text-blue-200",
      delete: "text-blue-600 dark:text-blue-400"
    },
  };

  const c = colorMap[color] || colorMap.blue;

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`p-4 rounded-xl border shadow hover:shadow-md transition cursor-grab ${c.light} ${c.dark}`}
    >
      <h3 className="font-semibold text-base">{task.title}</h3>
      {task.description && (
        <p className="text-sm mt-1">
          {task.description}
        </p>
      )}
      <button
        onClick={onDelete}
        className={`text-xs mt-3 hover:underline ${c.delete}`}
      >
        Delete
      </button>
    </div>
  );
}
