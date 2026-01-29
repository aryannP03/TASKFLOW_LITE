

function Filter({ priority, setPriority}) {
    
    
    return (
        <div>
            <label className="filter-task" >Filter : </label>
                <select value={priority} onChange= {(e) => setPriority(e.target.value)}>
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
        </div>
    )
}

export default Filter
