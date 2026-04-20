// Holds state + functions
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  // state to store tasks
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  // function to add task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // unique id
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]); // update state
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-8 ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-linear-to-br from-violet-200 to-violet-400"
      }`}
    >
      {/* Card Container */}
      <div
        className={`p-6 rounded-2xl shadow-lg w-full max-w-2xl ${
          darkMode ? "bg-gray-700" : "bg-white"
        }`}
      >
        <button
          onClick={toggleTheme}
          className='mb-3 px-4 py-2 rounded-lg backfdrop-blur-md border ${darkMode
            ? "bg-gray-800"
            : "bg-violet-200"}'
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
        <p className="text-center text-violet-600 mb-3">
          Total: {tasks.length} | Completed:{" "}
          {tasks.filter((t) => t.completed).length}
        </p>

        {/* form */}
        <TaskForm addTask={addTask} />

        <div className="flex justify-center gap-2 mb-4">
          {/* filter buttons */}
          <button
            onClick={() => setFilter("all")}
            className="px-3 py-1 bg-violet-200 rounded hover:bg-violet-600"
          >
            All
          </button>

          <button
            onClick={() => setFilter("completed")}
            className="px-3 py-1 bg-violet-200 rounded hover:bg-violet-600"
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("pending")}
            className="px-3 py-1 bg-violet-200 rounded hover:bg-violet-600"
          >
            Pending
          </button>
        </div>

        {/* list */}
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}
export default App;
