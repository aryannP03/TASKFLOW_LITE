

function Searchtask( { searchvalue, setSearchValue } ) { 

    return (
        <div className='search-task text-white text-xl'>
            <label>Search : </label>
            <input type="text" value={searchvalue} placeholder="Search task"
                onChange={(e) => setSearchValue(e.target.value)}  
                className="border-2 border-white rounded-lg p-1"/>
        </div>
    )
}

export default Searchtask
