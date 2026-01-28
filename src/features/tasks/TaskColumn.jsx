import React from "react";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core"

function TaskColumn({ title, tasks, type }) {

  const{ setNodeRef } = useDroppable({
    id: type,
  })
  return (
    <div ref={setNodeRef} className={`column${type}`}>
      <h3>{title}</h3>

      {tasks.length === 0 && <p className="empty-text">No tasks</p>}

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />                 
      ))}
    </div>
  );
}

export default TaskColumn;
