import React, {useState} from "react";
import { useDraggable } from "@dnd-kit/core"
import TaskPopup from "../../components/TaskPopup";
import UseEditTask from "../../hooks/useEditTask";
import TaskForm from "./TaskForm";


function TaskCard({ task, setTasks }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  })

  const [showEditPopup, setShowEditPopup] = useState(false)
  const { editTask } = UseEditTask(setTasks)

  const handleEditSubmit = (updatedData) => {
    editTask(task.id, updatedData)
    setShowEditPopup(false)
  }


  return (
    <div
      ref={setNodeRef}
      // style={style}
      {...listeners}
      {...attributes}
      className="task-card"
    >
      {/* {console.log("this is task:", task)} */}
      <h4 className="task-title">{task.title}</h4>
      <p className={`priority ${task.priority}`}>Priority: {task.priority}</p>
      <p className="due-date">Due Date: {task.dueDate}</p>
      <p className="assignee">Assignee: {task.assignee}</p>
      <button
        className="edit-btn"
        onClick={() => setShowEditPopup(true)} 
      >Edit</button>

      {showEditPopup && (
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
