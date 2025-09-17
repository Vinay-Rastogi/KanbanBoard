import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const columns = ["todo", "inprogress", "done"];

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light"); // light or dark

  useEffect(() => {
    const stored = localStorage.getItem("kanban.tasks.v1");
    if (stored) setTasks(JSON.parse(stored));

    const storedTheme = localStorage.getItem("kanban.theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("kanban.tasks.v1", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("kanban.theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const addTask = (title, description) => {
    setTasks((prev) => [
      { id: crypto.randomUUID(), title, description, col: "todo" },
      ...prev,
    ]);
  };

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const moveTask = (id, newCol) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, col: newCol } : t))
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-white px-6 py-8">
      <header className="max-w-5xl mx-auto flex flex-col items-center gap-6">
  <h1 className="text-4xl font-extrabold tracking-tight text-center">
    📝 Dynamic Kanban Board
  </h1>

  <button
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    className="px-5 py-2.5 text-base rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
  >
    {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
  </button>

  <div className="w-full">
    <TaskForm onAdd={addTask} />
  </div>
</header>


      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {columns.map((col) => (
          <TaskColumn
            key={col}
            columnId={col}
            title={
              col === "todo" ? "To Do" : col === "inprogress" ? "In Progress" : "Done"
            }
            colorLight={
              col === "todo"
                ? "border-red-200 bg-red-50"
                : col === "inprogress"
                ? "border-amber-200 bg-amber-50"
                : "border-emerald-200 bg-emerald-50"
            }
            colorDark={
              col === "todo"
                ? "border-red-500/20 bg-red-500/10"
                : col === "inprogress"
                ? "border-amber-500/20 bg-amber-500/10"
                : "border-emerald-500/20 bg-emerald-500/10"
            }
            tasks={tasks.filter((t) => t.col === col)}
            onDelete={deleteTask}
            onMove={moveTask}
          />
        ))}
      </main>
    </div>
  );
}
