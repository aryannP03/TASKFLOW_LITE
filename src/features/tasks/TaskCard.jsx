import React from "react";

function TaskCard({ task }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "4px",
      }}
    >
      <h4>{task.title}</h4>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Assignee: {task.assignee}</p>
    </div>
  );
}

export default React.memo(TaskCard);
