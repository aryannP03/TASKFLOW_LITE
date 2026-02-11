import React, {useState} from "react";
import { useDraggable } from "@dnd-kit/core"
import TaskPopup from "../../common/modal/TaskPopup";
import UseEditTask from "../../hooks/useEditTask";
import TaskForm from "./TaskForm";
import { CSS } from "@dnd-kit/utilities"
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskSelection, deleteTask } from "./tasksSlice"

function TaskCard({ task, setTasks }) {

  const dispatch = useDispatch()
  const selectedTasks = useSelector(state => state.tasks.selectedTasks)
  
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  })

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const [showEditPopup, setShowEditPopup] = useState(false)
  const { editTask } = UseEditTask(setTasks)

  const handleEditSubmit = (updatedData) => {
    editTask(task.id, updatedData)
    setShowEditPopup(false)
  }


  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
      bg-[radial-gradient(circle_500px_at_50%_-80%,#461446,#2C063F,#A419A7)]
      text-white rounded-xl py-[1.25rem] px-[0.87rem] mb-3 border border-gray-200 
      transition-transform transition-shadow duration-150 ease-in-out relative
      hover:-translate-y-0.75 hover:shadow-[0_0.5rem_1.25rem_rgba(0,0,0,0.08)] min-h-[12rem]">

      <div {...listeners} {...attributes} className="inline-block cursor-grab text-white">☰</div>

      <input type="checkbox" name="selectTask" id="selectTask" className="absolute right-3 size-4"
        checked={selectedTasks.includes(task.id)}
        onChange={() => dispatch(toggleTaskSelection(task.id))}
      />

      {/* {console.log("this is task:", task)} */}
      <h4 className="task-title">{task.title}</h4>
      <p className={`priority ${task.priority}`}>Priority: {task.priority}</p>
      <p className="due-date">Due Date: {task.dueDate}</p>
      <p className="assignee">Assignee: {task.assignee}</p>
      <div className="absolute right-3">  

        <button
          className="edit-btn"
          onClick={() => setShowEditPopup(true)} 
        ><img src="/assets/edit.png" alt="edit" className="btn-icon" />
        </button>
        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTask(task.id))} 
        ><img src="/assets/delete-btn.png" alt="edit" className="btn-icon ml-1.5" />
        </button>
      </div>

      {
      showEditPopup && (
          <TaskPopup onClose={() => setShowEditPopup(false)}>
            <TaskForm 
            initialData={task}
            onSubmit={handleEditSubmit} />
          </TaskPopup>
      )}
    </div>

      
  );
}

export default React.memo(TaskCard);
