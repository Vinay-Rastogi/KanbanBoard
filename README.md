# 📝 Dynamic Kanban Board

A responsive **Kanban Board** built with **React** and **Tailwind CSS**, featuring:

- ✅ **Add / Delete tasks**
- ✅ **Drag-and-drop** tasks between columns (To Do / In Progress / Done)
- ✅ **Light / Dark theme toggle** with persistent preference
- ✅ **Color-coded task cards** based on their column
- ✅ **LocalStorage persistence** – tasks and theme survive page refresh
- ✅ **Responsive design** – works on mobile, tablet and desktop

---

### 🚀 Live Features
- **Drag & Drop**: Move tasks across columns using HTML5 drag-and-drop API.
- **Theme Toggle**: Switch between Light 🌞 and Dark 🌙 mode.
- **Persistent State**: All tasks and theme are stored in `localStorage`.
- **Column Color Coding**: Cards automatically match the color theme of their column.
- **Modern UI**: Tailwind-based design with smooth hover and focus states.

---

## 📂 Project Structure

```
src/
│
├─ main.jsx                # Entry point - renders <App />
├─ App.jsx                 # App state, theme toggle, and layout
│
├─ components/
│   ├─ TaskForm.jsx        # Input form to add tasks
│   ├─ TaskColumn.jsx      # Renders each Kanban column & handles drop events
│   └─ TaskCard.jsx        # Single draggable task card with delete button
│
├─ index.css               # Tailwind base styles and utilities
│
├─ tailwind.config.js      # Tailwind configuration (dark mode & safelist)
└─ postcss.config.js       # PostCSS configuration for Tailwind
```

---

## 🛠️ Tech Stack

- **React 18 + Vite** – fast, modern front-end tooling
- **Tailwind CSS 3.x** – utility-first styling
- **HTML5 Drag & Drop API** – for task movement
- **localStorage** – to persist tasks and theme preference

---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/dynamic-kanban-board.git
cd dynamic-kanban-board
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```
Your app will be running at:
```
http://localhost:5173/
```

---

## 🌗 Theme Toggle
The app supports both **Light** and **Dark** themes.  
- The current theme is stored in `localStorage`.
- Uses Tailwind’s `dark:` classes (`darkMode: "class"` in `tailwind.config.js`).

---

## 🧩 How It Works

### Task Management
- All tasks are stored in a single state array:
  ```js
  { id, title, description, col } // col = 'todo' | 'inprogress' | 'done'
  ```
- New tasks always start in the **To Do** column.

### Drag & Drop
- Cards are draggable (`draggable` attribute).
- On drop, the column ID is used to update the task’s `col` property.

### Persistence
- The tasks array and theme are saved to **localStorage** so they persist after page refresh.

---

## 🛠️ Configuration
### Tailwind
`tailwind.config.js` enables `darkMode: "class"` and includes a **safelist** for dynamic color classes used in colored task cards:
```js
safelist: [
  { pattern: /(bg|border|text)-(red|amber|emerald)-(50|200|400|500|900)/ },
],
```


---

## 🤖 Credits
Developed by **Vinay Rastogi**  
Built with ❤️ using React JS and Tailwind
