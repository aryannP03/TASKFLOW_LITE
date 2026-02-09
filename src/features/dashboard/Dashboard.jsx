import React, {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// import { useTasks } from "../../hooks/useTasks";
import TaskBoard from "../tasks/TaskBoard";
import TaskPopup from "../../components/TaskPopup";
import TaskForm from "../tasks/TaskForm";
import Searchtask from "../../components/Search";
import Filter from "../../components/Filter";
import useDebounce from "../../hooks/useDebounce";
import useTaskFilter from "../../hooks/useTaskFilter";
import { useDispatch, useSelector} from "react-redux"
import { fetchTasks, addTask, deleteTask } from "../tasks/tasksSlice";
import Header from "../../components/header/Header";
import "./style/index.css"

function Dashboard() {

  
  const { tasks, loading, error, selectedTasks } = useSelector((state) => state.tasks)



  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const { logout } = useAuth();
  const navigate = useNavigate();
  // const { tasks, loading, error, addTask, setTasks } = useTasks();
  const [showPopup, setShowPopup] = useState(false);

  const [priority, setPriority] = useState("")
  const [searchvalue, setSearchValue] = useState("")

  const debouncedSearch = useDebounce(searchvalue, 1500, 5)

  const { filteredTasks } = useTaskFilter(tasks, debouncedSearch, priority)

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  const handleAddTask = (data) => {
    dispatch(addTask({
      ...data,
      status: "todo",
      assignee: "Aryan"
    }))
    setShowPopup(false)
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-container">
        
        

        <div style={{ margin: "16px 0" }}>
          <button className="add-task-btn" onClick={() => setShowPopup(true)}>
            + Add Task
          </button>
        </div>

        <div className="flex max-w-full gap-3">
          <Searchtask searchvalue={searchvalue} setSearchValue={setSearchValue}/>

          <Filter className="" priority={priority} setPriority={setPriority}/>

          {selectedTasks.length > 0 && (
            <button className="ml-auto hover:bg-header-bg border-b-fuchsia-300 border-2"
              onClick={ () => selectedTasks.forEach(id => dispatch(deleteTask(id)) ) }
              >Delete Selected</button>
          )}

        </div>

        <div>
          <h2>My Tasks</h2>

          {loading && <p>Loading tasks...</p>}

          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && tasks.length === 0 && (
            <p>No tasks found.</p>
          )}

          {/* {console.log("filtered tasks are :", filteredTasks)} */}
          
          {!loading && !error && tasks.length > 0 && (
            <TaskBoard tasks={filteredTasks} />
          )}

          {showPopup && (
          <TaskPopup onClose={() => setShowPopup(false)}>
            <TaskForm onSubmit={handleAddTask} />
          </TaskPopup>
        )}
        </div>
      </div>  
    </div>
  );
}

export default Dashboard;
