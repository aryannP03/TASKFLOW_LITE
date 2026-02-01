import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import TaskPopup from "../TaskPopup";
import CommonForm from "../CommonForm";

function Header() {
  const { isAuthenticated, logout, login } = useAuth();
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  const handleLoginSubmit = (data) => {
    login(data)
    setShowLoginPopup(false)
    navigate("/dashboard")
  }

  return (
    <>
    <nav>
      <h1>TaskFlow Lite</h1>

      {!isAuthenticated && (
        <>
          <button onClick={() => setShowLoginPopup(true)}>
            Login
          </button>

          <button onClick={() => navigate("/signup")}>
            Signup
          </button>
        </>
      )}

      {isAuthenticated && (
        <button onClick={logout}>
          Logout
        </button>
      )}
      </nav>

      {showLoginPopup && (
        <TaskPopup onClose={() => setShowLoginPopup(false)}>
            <CommonForm
                onSubmit={handleLoginSubmit}
                buttonText="Login"
            />    
        </TaskPopup>
      )}
    </>
  );
}

export default Header;
