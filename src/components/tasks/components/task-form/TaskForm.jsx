import React, {useState, useEffect} from "react";
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
      <div>  
        <form className=" bg-black p-4 flex flex-col gap-[1.25rem] text-white w-[25rem] h-[26rem] rounded-xl z-50 " 
        onSubmit={handleSubmit(onSubmit)}>
          <h3 className="add-task-head items-center">
            {initialData?.id? "Edit task": "Add task"}
          </h3>

          <div className="flex flex-col gap-[0.35rem]">
          <label className="text-[0.9rem] text-gray-300 font-medium">Title</label>
          <input {...register("title", { required: "Title is required" })} 
            className="
                h-[2.6rem]
                px-[0.75rem]
                rounded-[0.6rem]
                bg-[#0f0f1a]
                border border-white/10
                text-[0.95rem]
                outline-none
                focus:border-[#E4A02D]
                focus:ring-1 focus:ring-[#E4A02D]
                transition"
          />
          {errors.title && <p className="text-red-400 text-[0.75rem]">{errors.title.message}</p>}
          </div>

          <div className="flex flex-col gap-[0.35rem]">
            <label className="text-[0.9rem] text-gray-300 font-medium">Priority</label>
            <select {...register("priority")}
              className=" h-[2.6rem] px-[0.75rem] rounded-[0.6rem] bg-[#0f0f1a] border border-white/10 text-[0.95rem] outline-none focus:border-[#E4A02D]">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>  

          <div className="flex flex-col gap-[0.35rem]">  
            <label className="text-[0.9rem] text-gray-300 font-medium">Due Date</label>
            <input
              type="date"
              className="h-[2.6rem] px-[0.75rem] rounded-[0.6rem] bg-[#0f0f1a] border border-white/10 text-[0.95rem] outline-none focus:border-[#E4A02D]"
              {...register("dueDate", {
                validate: (value) =>
                  new Date(value) >= new Date().setHours(0, 0, 0, 0) ||
                  "Due date cannot be in the past",
              })}
            />
            {errors.dueDate && <p className="error-text">{errors.dueDate.message}</p>}
          </div>

          <div className="
                flex justify-end gap-[0.75rem] pt-[1.25rem] border-t border-white/10 mt-[0.5rem]">    
            <button type="submit"  
            className="
                px-[1.4rem] py-[0.65rem] rounded-[0.6rem] bg-[#E4A02D] text-black text-[0.95rem] font-semibold"> 
            { initialData?.id? "Update Task" : "Add Task" } </button>
          </div>
        </form>
      </div>  
  )
}

export default TaskForm;
