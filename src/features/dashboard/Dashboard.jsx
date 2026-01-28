import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTasks } from "../../hooks/useTasks";
import TaskBoard from "../tasks/TaskBoard";
import TaskPopup from "../../components/TaskPopup";
import TaskForm from "../tasks/TaskForm";


function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { tasks, loading, error, addTask } = useTasks();
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
    <div>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>TaskFlow Lite</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div style={{ margin: "16px 0" }}>
        <button onClick={() => setShowPopup(true)}>
          + Add Task
        </button>
      </div>

      <div>
        <h2>My Tasks</h2>

        {loading && <p>Loading tasks...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && tasks.length === 0 && (
          <p>No tasks found.</p>
        )}

        {!loading && !error && tasks.length > 0 && (
          <TaskBoard tasks={tasks} />
        )}

        {showPopup && (
        <TaskPopup onClose={() => setShowPopup(false)}>
          <TaskForm onSubmit={handleAddTask} />
        </TaskPopup>
      )}
      </div>
    </div>
  );
}

export default Dashboard;
