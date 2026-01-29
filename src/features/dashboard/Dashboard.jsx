import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTasks } from "../../hooks/useTasks";
import TaskBoard from "../tasks/TaskBoard";
import TaskPopup from "../../components/TaskPopup";
import TaskForm from "../tasks/TaskForm";
import Searchtask from "../../components/Search";
import Filter from "../../components/Filter";
import useDebounce from "../../hooks/useDebounce";
import useTaskFilter from "../../hooks/useTaskFilter";

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { tasks, loading, error, addTask, setTasks } = useTasks();
  const [showPopup, setShowPopup] = useState(false);

  const [priority, setPriority] = useState("")
  const [searchvalue, setSearchValue] = useState("")

  const debouncedSearch = useDebounce(searchvalue, 1500)

  const { filteredTasks } = useTaskFilter(tasks, debouncedSearch, priority)

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  const handleAddTask = (data) => {
    addTask({
      ...data,
      status: "todo",
      assignee: "Aryan"
    })
    setShowPopup(false)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <header className="dashboard-title">
          <h1>TaskFlow Lite</h1>
          <button className="logout-btn"onClick={handleLogout}>Logout</button>
        </header>

        <div style={{ margin: "16px 0" }}>
          <button className="add-task-btn" onClick={() => setShowPopup(true)}>
            + Add Task
          </button>
        </div>

        <div><Searchtask searchvalue={searchvalue} setSearchValue={setSearchValue}/></div>

        <div ><Filter priority={priority} setPriority={setPriority}/></div>

        <div>
          <h2>My Tasks</h2>

          {loading && <p>Loading tasks...</p>}

          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && tasks.length === 0 && (
            <p>No tasks found.</p>
          )}

          {/* {console.log("filtered tasks are :", filteredTasks)} */}
          
          {!loading && !error && tasks.length > 0 && (
            <TaskBoard tasks={filteredTasks} setTasks={setTasks} />
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
