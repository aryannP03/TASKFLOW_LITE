import React, {useState} from "react";
import { useDraggable } from "@dnd-kit/core"
import TaskPopup from "../../components/TaskPopup";
import UseEditTask from "../../hooks/useEditTask";
import TaskForm from "./TaskForm";
import { CSS } from "@dnd-kit/utilities"
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskSelection } from "./tasksSlice"

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
      className="task-card relative"
    >

      <div {...listeners} {...attributes} className="drag-handle">☰</div>

      <input type="checkbox" name="selectTask" id="selectTask" className="absolute right-3 size-4"
        checked={selectedTasks.includes(task.id)}
        onChange={() => dispatch(toggleTaskSelection(task.id))}
      />

      {/* {console.log("this is task:", task)} */}
      <h4 className="task-title">{task.title}</h4>
      <p className={`priority ${task.priority}`}>Priority: {task.priority}</p>
      <p className="due-date">Due Date: {task.dueDate}</p>
      <p className="assignee">Assignee: {task.assignee}</p>
      <button
        className="edit-btn"
        onClick={() => setShowEditPopup(true)} 
      >Edit</button>

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
