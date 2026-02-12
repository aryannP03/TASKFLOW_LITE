import React, { useState } from "react";
import TaskCard from "../task-card/TaskCard";
import { useDroppable } from "@dnd-kit/core"
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function TaskColumn({ title, tasks, type, setTasks }) {

  const [isOpen, setIsOpen] = useState(true)
  
  const{ setNodeRef } = useDroppable({
    id: type,
  })
  return (
    <div ref={setNodeRef} className= {"bg-card-column-bg rounded-[1.25rem] p-4 h-fit"}>
          <h3 onClick={() => setIsOpen(prev => !prev)} 
          className=" bg-card-col-head border-2 border-card-col-head-border 
          rounded-2xl max-w-[19rem] h-[4rem] cursor-pointer text-center align-middle  mt-1 mb-4 mx-3.5 text-[1.75rem] font-medium text-white flex items-center justify-center "
          >{title}{isOpen?<SlArrowDown className="ml-2 size-6" />:<SlArrowRight className="ml-2 size-5"/>}</h3>

      {isOpen && (
        <>
        {tasks.length === 0 && <p className="text-gray-400 text-[0.9rem] text-center">No tasks</p>}

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />               
        ))}
        </>
      )}
    </div>
  );
}

export default TaskColumn;
