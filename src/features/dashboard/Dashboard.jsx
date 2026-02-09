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
import { fetchTasks, addTask, deleteTask, editTask } from "../tasks/tasksSlice";
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

  const handlePriorityChange = (priority) => {
    selectedTasks.map(id => dispatch(editTask({
      id,
      updatedData: { priority }
    })))
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

          <div className="ml-auto flex gap-2">
            {selectedTasks.length > 0 && (
                                
                <button className=" hover:bg-header-bg hover:text-amber-50 border-b-fuchsia-300 border-2 rounded"
                onClick={ () => selectedTasks.forEach(id => dispatch(deleteTask(id)) ) }
                >Delete Selected</button>
            )}
            {selectedTasks.length > 0 &&(
              <select onChange={ (e)=> handlePriorityChange(e.target.value)} className="border-b-fuchsia-300 border-2 rounded"> 
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            )}
          </div>  

        </div>

        <div>

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
              <div
                className="
                  w-[27.5rem]
                  min-h-[20rem]
                  rounded-[1.25rem]
                  bg-[#161622]
                  p-[1.75rem]
                  shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.6)]
                  border border-white/10"
              >
              <TaskForm onSubmit={handleAddTask} />
              </div>
            </TaskPopup>
          
        )}
        </div>
      </div>  
    </div>
  );
}

export default Dashboard;
