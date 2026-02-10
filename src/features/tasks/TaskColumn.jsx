import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core"

function TaskColumn({ title, tasks, type, setTasks }) {

  const [isOpen, setIsOpen] = useState(true)
  
  const{ setNodeRef } = useDroppable({
    id: type,
  })
  return (
    <div ref={setNodeRef} className= {`column${type}`}>
      <h3 onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer hover:bg-red-100">{title}</h3>

      {isOpen && (
        <>
        {tasks.length === 0 && <p className="empty-text">No tasks</p>}

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />               
        ))}
        </>
      )}
    </div>
  );
}

export default TaskColumn;
