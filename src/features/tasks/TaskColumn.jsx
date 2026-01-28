import React from "react";
import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks }) {
  return (
    <div style={{ width: "30%", border: "1px solid #ddd", padding: "8px" }}>
      <h3>{title}</h3>

      {tasks.length === 0 && <p>No tasks</p>}

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskColumn;
