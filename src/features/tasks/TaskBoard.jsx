import React, { useMemo } from "react";
import TaskColumn from "./TaskColumn";

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
    <div style={{ display: "flex", gap: "16px" }}>
      <TaskColumn title="To Do" tasks={todoTasks} />
      <TaskColumn title="In Progress" tasks={inProgressTasks} />
      <TaskColumn title="Done" tasks={doneTasks} />
    </div>
  );
}

export default TaskBoard;
