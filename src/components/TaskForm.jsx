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
        className="flex-1 p-2 border rounded"
      />

      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
}

export default TaskForm;
