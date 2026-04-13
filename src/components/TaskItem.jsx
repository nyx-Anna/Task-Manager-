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
    <div className="flex justify-between items-center p-3 mb-3 bg-violet-200 rounded-lg shadow-sm">
      {/* EDIT MODE */}
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 p-1 border rounded"
        />
      ) : (
        <span
          className={`${task.completed ? "line-through text-black-400" : ""}`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        {/* Save/Edit */}
        {isEditing ? (
          <button onClick={handleEdit} className="text-violet-600">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-violet-600"
          >
            Edit
          </button>
        )}

        {/* Toggle */}
        <button onClick={() => toggleTask(task.id)} className="text-violet-600">
          ✔
        </button>

        {/* Delete */}
        <button onClick={() => deleteTask(task.id)} className="text-violet-600">
          ✖
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
