import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import TaskPopup from "../TaskPopup";
import CommonForm from "../CommonFormField";
import CommonFormField from "../CommonFormField";
import LoginPage from "../../features/login/Login";
import SignupPage from "../../features/sign-up/SignUp";


function Header() {
  const { isAuthenticated, logout, login } = useAuth();
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [showSignUpPopup, setShowSignUpPopup] = useState(false)

  


  return (
    <>
      <div className="flex h-[5rem] bg-header-bg align-middle text-header-text ">  
        <nav className="flex items-center w-full px-6">
          <h1 className="flex items-center mr-auto gap-2 text-2xl font-extrabold">TaskFlow Lite</h1>

          {!isAuthenticated && (
            <div
            className="flex gap-4">
              <button 
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium
                        hover:bg-indigo-700 active:scale-95 transition "
                onClick={() => setShowLoginPopup(true)}>
                Login
              </button>

              <button 
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium
                        hover:bg-indigo-700 active:scale-95 transition  "
              onClick={() => setShowSignUpPopup(true)}>
                Signup
              </button>
            </div>
          )}

          {isAuthenticated && (
            <>  
              <button 
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium
                        hover:bg-indigo-700 active:scale-95 transition"   
              onClick={() => logout()}>
                Logout
              </button>
              <botton 
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium
                        hover:bg-indigo-700 active:scale-95 transition"
              onClick={() => navigate('/update-user')}>
                Update User
              </botton>
            </>  
          )}
          </nav>
      </div>    

      {showLoginPopup && (
        <TaskPopup onClose={() => setShowLoginPopup(false)}>
            <div className="flex md:flex-row w-[95vw] lg:w-[72rem] md:w-[36rem] min-h-[48rem] rounded-2xl overflow-hidden bg-mainbg text-white">
              
              <div className="hidden md:block md:w-45% items-center justify-center">
                <img
                  src="/assets/login.jpg"
                  alt="Login photo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                
                <div className="w-full md:w-1/2 flex items-center justify-center"></div>
                  <div className="w-[36rem] min-h-[48rem] max-w-full px-8 py-12 flex flex-col justify-center ">
                    <LoginPage
                      
                  />
                  </div>
              </div>
            </div>    
        </TaskPopup>
      )}
      {showSignUpPopup && (
        <TaskPopup onClose={() => setShowSignUpPopup(false)}>
          <div className="flex md:flex-row w-[95vw] lg:w-[72rem] md:w-[36rem] min-h-[48rem] rounded-2xl overflow-hidden bg-mainbg text-white">

            <div className="hidden md:block md:w- items-center justify-center">
                <img
                  src="/assets/login.jpg"
                  alt="Login photo"
                  className="w-full h-full object-cover"
                />
              </div>

             <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-[36rem] min-h-[48rem] max-w-full px-8 py-12 flex flex-col justify-center ">    
                  <SignupPage
                      
                  />
                  </div>
                </div>  
          </div>      
        </TaskPopup>
      )}
    </>
  );
}

export default Header;
