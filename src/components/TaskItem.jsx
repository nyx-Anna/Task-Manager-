// Uses them on click
import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (!newText.trim()) return;
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded-lg shadow-sm">
      {/* EDIT MODE */}
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 p-1 border rounded"
        />
      ) : (
        <span
          className={`${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        {/* Save/Edit */}
        {isEditing ? (
          <button onClick={handleEdit} className="text-blue-500">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-500"
          >
            Edit
          </button>
        )}

        {/* Toggle */}
        <button onClick={() => toggleTask(task.id)} className="text-green-500">
          ✔
        </button>

        {/* Delete */}
        <button onClick={() => deleteTask(task.id)} className="text-red-500">
          ✖
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
