import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTasks } from "../../hooks/useTasks";
import TaskBoard from "../tasks/TaskBoard";
import TaskPopup from "../../components/TaskPopup";
import TaskForm from "../tasks/TaskForm";
import Searchtask from "../../components/Search";
import Filter from "../../components/Filter";


function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { tasks, loading, error, addTask, setTasks } = useTasks();
  const [showPopup, setShowPopup] = useState(false);

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

        <div><Searchtask tasks={tasks}/></div>

        <div ><Filter tasks={tasks}/></div>

        <div>
          <h2>My Tasks</h2>

          {loading && <p>Loading tasks...</p>}

          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && tasks.length === 0 && (
            <p>No tasks found.</p>
          )}

          {!loading && !error && tasks.length > 0 && (
            <TaskBoard tasks={tasks} setTasks={setTasks} />
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
