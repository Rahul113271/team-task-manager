function TaskCard({ task }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Assigned To:</strong>{" "}
        {task.assignedTo?.name || "No User"}
      </p>
    </div>
  );
}

export default TaskCard;