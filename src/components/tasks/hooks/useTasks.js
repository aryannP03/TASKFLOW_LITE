import { useDispatch, useSelector } from 'react-redux'
import { useDraggable } from '@dnd-kit/core'
import { useState } from 'react'
import { CSS } from '@dnd-kit/utilities'
import toast from 'react-hot-toast'
import { editTask, deleteTask, toggleTaskSelection } from '../components/tasksSlice'


function useTasks(task) {
    
    const dispatch = useDispatch()
    const selectedTasks = useSelector(state => state.tasks.selectedTasks)
    const [showEditPopup, setShowEditPopup] = useState(false)
    
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    })

    const style = {
        transform:CSS.Translate.toString(transform),
    }


    const handleEditSubmit = (updatedData) => {
        dispatch(editTask({id: task.id, updatedData}))
        setShowEditPopup(false)
    }

    const handleSelectTask = () => dispatch(toggleTaskSelection(task.id))
    const handleDeleteSelectedTasks = () => {
        dispatch(deleteTask(task.id))
        toast.success("Task Deleted")
    }

    

    return { selectedTasks, attributes, listeners, setNodeRef, showEditPopup, setShowEditPopup, handleEditSubmit, 
        handleSelectTask, handleDeleteSelectedTasks, style }
}

export default useTasks
