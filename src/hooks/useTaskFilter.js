import { useEffect, useState } from "react";

function useTaskFilter(tasks, searchValue, priority) {
  const [searchedTask, setSearchedTask] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(() => {
    if (!searchValue) {
      setSearchedTask(null);
      return;
    }

    const foundTask = tasks.find(task =>
      task.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchedTask(foundTask ? foundTask : null);
  }, [tasks, searchValue]);

  useEffect(() => {
    let result = tasks 
    
    if(priority && priority !== "all") {
    result = tasks.filter(task => task.priority === priority);
    }
    
    if(searchValue) {
    result = result.filter(task => task.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    setFilteredTasks(result)
    },[tasks, priority, searchValue])


  return { searchedTask, filteredTasks }
}

export default useTaskFilter;

