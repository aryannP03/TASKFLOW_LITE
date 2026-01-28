import React, { useMemo } from "react";
import TaskColumn from "./TaskColumn";
// import {DndContext} from '@dnd-kit/core';

function TaskBoard({ tasks }) {
  const todoTasks = useMemo(
    () => tasks.filter((task) => task.status === "todo"),
    [tasks]
  );

  const inProgressTasks = useMemo(
    () => tasks.filter((task) => task.status === "in-progress"),
    [tasks]
  );

  const doneTasks = useMemo(
    () => tasks.filter((task) => task.status === "done"),
    [tasks]
  );

  return (
    <div className="board">
      <TaskColumn title="To Do" tasks={todoTasks} type="todo" />
      <TaskColumn title="In Progress" tasks={inProgressTasks} type="progresss"/>
      <TaskColumn title="Done" tasks={doneTasks} type="done"/>
    </div>
  );
}

export default TaskBoard;
