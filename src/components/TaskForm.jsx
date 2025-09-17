import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center 
                 bg-white dark:bg-slate-800 
                 p-6 rounded-2xl 
                 border border-slate-200 dark:border-slate-700 
                 shadow-md"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="flex-1 text-lg p-3 rounded-lg 
                   border border-slate-300 dark:border-slate-600 
                   bg-slate-50 dark:bg-slate-900 
                   text-slate-900 dark:text-slate-100
                   focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        className="flex-1 text-lg p-3 rounded-lg 
                   border border-slate-300 dark:border-slate-600 
                   bg-slate-50 dark:bg-slate-900
                   text-slate-900 dark:text-slate-100
                   focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        className="flex items-center justify-center gap-2 px-6 py-3 
                   text-lg font-semibold rounded-xl shadow
                   bg-purple-600 hover:bg-purple-700 
                   text-white transition-colors"
      >
        <span className="text-xl font-bold leading-none">＋</span>
        Add
      </button>
    </form>
  );
}
