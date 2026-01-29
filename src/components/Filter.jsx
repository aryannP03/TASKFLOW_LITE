import React, { useState, useEffect } from 'react'
import useTaskFilter from '../hooks/useTaskFilter'
import TaskCard from '../features/tasks/TaskCard'

function Filter({tasks}) {
    
    const [priority, setPriority] = useState("")

    const { filteredTask } = useTaskFilter(tasks, "" , priority)
    
    
    return (
        <div>
            <label className="filter-task" >Filter : </label>
                <select onChange= {(e) => setPriority(e.target.value)}>
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                {filteredTask.map(task => (<TaskCard key={task.id} task={task} />))}
        </div>
    )
}

export default Filter
