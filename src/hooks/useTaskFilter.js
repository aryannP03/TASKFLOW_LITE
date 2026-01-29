import { useEffect, useState } from "react";

function useTaskFilter(tasks, searchValue, priority) {
  const [searchedTask, setSearchedTask] = useState(null);
  const [filteredTask, setFilteredTasks] = useState([])

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
    
    if (!priority) {
      setFilteredTasks(tasks);
      return;
    }

    const result = tasks.filter(task => task.priority === priority);
    setFilteredTasks(result);

  }, [tasks, priority]);

  return { searchedTask, filteredTask }
}

export default useTaskFilter;

