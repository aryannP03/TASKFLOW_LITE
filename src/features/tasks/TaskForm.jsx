import React from "react";
import { useForm } from "react-hook-form";

function TaskForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Add Task</h3>

      <label>Title</label>
      <input {...register("title", { required: "Title is required" })} />
      {errors.title && <p>{errors.title.message}</p>}

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
      {errors.dueDate && <p>{errors.dueDate.message}</p>}

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
