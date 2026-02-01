

function UseEditTask(setTasks) {
    
    const editTask = async (taskId, updatedData) => {
        setTasks(prev =>
            prev.map(task => 
                task.id === taskId ? {...task, ...updatedData} : task
            )
        )
        
    try{
        await fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "json",
            },
            body: JSON.stringify(updatedData),
        })
    } catch (err) {
        console.log("Failed to edit task", err)
        
    }        
    }
    
    return { editTask } 
}

export default UseEditTask
