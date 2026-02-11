function Filter({ priority, setPriority}) {
    
    
    return (
        <div>
            <label className="filter-task text-white text-xl" >Filter : </label>
                <select className="text-white text-lg border rounded-lg bg-card-bg px-3 py-1" value={priority} onChange= {(e) => setPriority(e.target.value)}>
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
        </div>
    )
}

export default Filter
