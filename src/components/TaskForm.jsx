import { useState } from "react";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return; // prevent empty task

    addTask(input); // send to App
    setInput(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
        className="flex-1 p-2 border rounded-lg focus:outline-1 focus:ring-indigo-400"
      />

      <button className="bg-blue-500 hover:bg-indigo-600 text-black px-5 rounded-lg transition">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
