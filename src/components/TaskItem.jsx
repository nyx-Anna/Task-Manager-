// Uses them on click

function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded-lg shadow-sm">
      <span className={`${task.completed ? "line-through text-gray-400" : ""}`}>
        {task.text}
      </span>

      <div className="flex gap-2">
        <button onClick={() => toggleTask(task.id)} className="text-green-500">
          ✔
        </button>

        <button onClick={() => deleteTask(task.id)} className="text-red-500">
          ✖
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
