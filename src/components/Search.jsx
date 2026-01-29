import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import TaskCard from '../features/tasks/TaskCard'

function Searchtask( {tasks} ) {

    const [searchvalue, setSearchValue] = useState("")
    const debouncedValue = useDebounce(searchvalue, 1500)
    const [selectedtask, setSelectedTask] =  useState(null)

    useEffect(() => {
        console.log("debounced value is", debouncedValue);
        
        
        const foundTask = tasks.find(task =>
            task.title.toLowerCase().includes(debouncedValue.toLowerCase())
        )

        setSelectedTask(foundTask ? foundTask : null);
        console.log("selected task is", selectedtask);
        

    }, [debouncedValue])


    
    return (
        <div className='search-task'>
            <input type="text" value={searchvalue}
                onChange={(e) => setSearchValue(e.target.value)}  />
            <div>
                {selectedtask ? (<TaskCard task={selectedtask} />) : ( <p>No task found</p>)}
            </div>        
        </div>
            
       
    )
}

export default Searchtask
