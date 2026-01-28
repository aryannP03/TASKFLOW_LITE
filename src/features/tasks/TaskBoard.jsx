import React, { useMemo } from "react";
import TaskColumn from "./TaskColumn";
import {DndContext} from '@dnd-kit/core'

function TaskBoard({ tasks, setTasks }) {

  const todoTasks = useMemo(
    () => tasks.filter((task) => task.status === "todo"),
    [tasks]
  );

  const inProgressTasks = useMemo(
    () => tasks.filter((task) => task.status === "progress"),
    [tasks]
  );

  const doneTasks = useMemo(
    () => tasks.filter((task) => task.status === "done"),
    [tasks]
  );

  const handleDragEnd = async (event) => {
    const {active, over } = event
    if(!over) return

    const newStatus = over.id
    console.log("Dragged to:",over.id);
    

    setTasks(prev =>
      prev.map(task => 
        (task.id === active.id) ? {...task, status: over.id} : task
      )
    
    )

    try{
      await fetch(`http://localhost:3000/tasks/${active.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "json",
        },
        body: JSON.stringify({ status: newStatus }),
      })
    }catch(err) {
      console.error("Failed to update task", err)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="board">
          <TaskColumn title="To Do" tasks={todoTasks} type="todo" />
          <TaskColumn title="In Progress" tasks={inProgressTasks} type="progress"/>
          <TaskColumn title="Done" tasks={doneTasks} type="done"/>
      </div>
    </DndContext>
  );
}

export default TaskBoard;
