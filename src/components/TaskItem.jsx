function TaskItem({ task }) {
  return <div className="p-3 border mb-2 rounded bg-white">{task.text}</div>;
}

export default TaskItem;
