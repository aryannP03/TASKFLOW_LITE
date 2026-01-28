import React from "react";
import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, type }) {
  return (
    <div className={`column${type}`}>
      <h3>{title}</h3>

      {tasks.length === 0 && <p className="empty-text">No tasks</p>}

      {tasks.map((task) => (
          <div className="task-card" key={task.id}>
              <h3 className="task-title">{task.title}</h3>

              <p className={`priority ${task.priority}`}>
                Priority: {task.priority}
              </p>

              <p className="due-date">
                Due Date: {task.dueDate}
              </p>

              <p className="assignee">
                Assignee: {task.assignee}
              </p>
          </div>
      ))}
    </div>
  );
}

export default TaskColumn;
