import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

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

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Task Manager</h1>

      {/* form */}
      <TaskForm addTask={addTask} />

      {/* list */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
