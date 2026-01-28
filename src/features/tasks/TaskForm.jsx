import React from "react";
import { useForm } from "react-hook-form";

function TaskForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="add-task-head">Add Task</h3>

      <label>Title</label>
      <input {...register("title", { required: "Title is required" })} />
      {errors.title && <p className="error-text">{errors.title.message}</p>}

      <label>Priority</label>
      <select {...register("priority")}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label>Due Date</label>
      <input
        type="date"
        {...register("dueDate", {
          validate: (value) =>
            new Date(value) >= new Date().setHours(0, 0, 0, 0) ||
            "Due date cannot be in the past",
        })}
      />
      {errors.dueDate && <p className="error-text">{errors.dueDate.message}</p>}

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
