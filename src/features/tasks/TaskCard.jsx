import React from "react";

function TaskCard({ task }) {
  return (
    <div className="task-card"
    >
      <h4 className="task-title">{task.title}</h4>
      <p className={`priority ${task.priority}`}>Priority: {task.priority}</p>
      <p className="due-date">Due Date: {task.dueDate}</p>
      <p className="assignee">Assignee: {task.assignee}</p>
    </div>
  );
}

export default React.memo(TaskCard);
