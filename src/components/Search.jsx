import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import TaskCard from '../features/tasks/TaskCard'
import useTaskFilter from '../hooks/useTaskFilter'

function Searchtask( { searchvalue, setSearchValue } ) { 

    return (
        <div className='search-task text-white text-xl'>
            <label>Search : </label>
            <input type="text" value={searchvalue}
                onChange={(e) => setSearchValue(e.target.value)}  
                className="border-2 border-white rounded-lg"/>
        </div>
    )
}

export default Searchtask
