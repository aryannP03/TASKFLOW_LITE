import React, { useMemo } from "react";
import TaskColumn from "./TaskColumn";
import {DndContext} from '@dnd-kit/core'
import { useDispatch } from "react-redux";
import { editTask } from "./tasksSlice";

function TaskBoard({ tasks }) {

  const dispatch = useDispatch()

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
    // console.log("Dragged to:",over.id);
    

    dispatch(editTask({
      id: active.id,
      updatedData: {status: newStatus},

    }))


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="board">
          <TaskColumn title="To Do" tasks={todoTasks} setTasks={setTasks} type="todo" />
          <TaskColumn title="In Progress" tasks={inProgressTasks} setTasks={setTasks} type="progress"/>
          <TaskColumn title="Done" tasks={doneTasks} setTasks={setTasks} type="done"/>
      </div>
    </DndContext>
  );
}

export default TaskBoard;
