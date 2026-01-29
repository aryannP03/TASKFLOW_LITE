import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import TaskCard from '../features/tasks/TaskCard'
import useTaskFilter from '../hooks/useTaskFilter'

function Searchtask( {tasks} ) {

    const [searchvalue, setSearchValue] = useState("")
    const debouncedValue = useDebounce(searchvalue, 1500)
    
    const { searchedTask } = useTaskFilter(tasks, debouncedValue, null)
    


    
    return (
        <div className='search-task'>
            <input type="text" value={searchvalue}
                onChange={(e) => setSearchValue(e.target.value)}  />
            <div>
                {searchedTask ? (<TaskCard task={searchedTask} />) : ( <p>No task found</p>)}
            </div>        
        </div>
            
       
    )
}

export default Searchtask
