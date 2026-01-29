import React from "react";
import { useDraggable } from "@dnd-kit/core"


function TaskCard({ task }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  })

  return (
    <div
      ref={setNodeRef}
      // style={style}
      {...listeners}
      {...attributes}
      className="task-card"
    >
      {/* {console.log("this is task:", task)} */}
      <h4 className="task-title">{task.title}</h4>
      <p className={`priority ${task.priority}`}>Priority: {task.priority}</p>
      <p className="due-date">Due Date: {task.dueDate}</p>
      <p className="assignee">Assignee: {task.assignee}</p>
    </div>
  );
}

export default React.memo(TaskCard);
