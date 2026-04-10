// Holds state + functions
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";

function App() {
  // state to store tasks
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>

        {/* form */}
        <TaskForm addTask={addTask} />

        {/* list */}
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>
    </div>
  );
}
export default App;
