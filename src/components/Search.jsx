import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import TaskCard from '../features/tasks/TaskCard'
import useTaskFilter from '../hooks/useTaskFilter'

function Searchtask( { searchvalue, setSearchValue} ) { 

    return (
        <div className='search-task'>
            <input type="text" value={searchvalue}
                onChange={(e) => setSearchValue(e.target.value)}  />
        </div>
            
       
    )
}

export default Searchtask
