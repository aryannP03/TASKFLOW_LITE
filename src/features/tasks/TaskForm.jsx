import React, {useState} from "react";
import { useForm } from "react-hook-form";

function TaskForm({ onSubmit, initialData = {}}) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({defaultValues: {
                title: "",
                priority: "low",
                dueDate: "",
                assignee: "",
              },
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      reset(initialData)
    }
  }, [initialData, reset])
  
  

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="add-task-head">
        {initialData?.id? "Edit task": "Add task"}
      </h3>

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

      <button type="submit"> { initialData?.id? "Update Task" : "Add Task" } </button>
    </form>
  )
}

export default TaskForm;
