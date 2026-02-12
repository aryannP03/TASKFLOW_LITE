import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import TaskPopup from "../modal/TaskPopup";;
import LoginPage from "../../components/login/Login";
import SignupPage from "../../components/sign-up/SignUp";


function Header() {
  const { isAuthenticated, logout, login } = useAuth();
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [showSignUpPopup, setShowSignUpPopup] = useState(false)
  const [showDropDown, setshowDropDown] = useState(false)

  
    return (
    <>
      <div className="bg-header-bg align-middle text-header-text sticky top-0">  
        <nav className="flex items-start w-full px-6 sm:flex-row h-20 ">
          <h1 className="mt-6 flex items-center mr-auto gap-2 text-xl font-extrabold sm:text-2xl">TaskFlow Lite</h1>

          {!isAuthenticated && (
            <div
            className="flex gap-4 mt-7 md:mt-4">
              <button 
                className="px-3 py-1.5 text-base rounded-lg bg-indigo-600 text-white font-medium
                        hover:bg-indigo-700 active:scale-95 transition sm:text-xl sm:px-6 sm:py-3"
                onClick={() => setShowLoginPopup(true)}>
                Login
              </button>

              <button 
              className= "px-3 py-1.5 text-base rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition sm:text-xl sm:px-6 sm:py-3"
              onClick={() => setShowSignUpPopup(true)}>
                Signup
              </button>
            </div>
          )}

          {isAuthenticated && (
            
            <div className="relative mt-4 mr-7 text-2xl">
              
                <button onClick={() => setshowDropDown(prev => !prev)}
                  className="">
                    <img
                      src="/assets/userimage.jpg"
                      alt="User Avatar"
                      className="rounded-full border-none h-13 w-13"
                    />
                </button>
                {showDropDown && (
                  <div className="absolute top-16 right-0.5 text-xl bg-fuchsia-800 w-35 border-2 rounded">
                    <button 
                      className="w-full hover:bg-header-bg border-b-fuchsia-300 border-b-2"
                      onClick={() => navigate('/update-user') }
                      >Profile</button>
                    <button 
                      className="w-full hover:bg-header-bg border-b-fuchsia-300"
                      onClick={() => logout()}
                      >Logout</button>
                  </div> 
                )}
              </div>  


           
            
          )}
          </nav>
      </div>    

      {showLoginPopup && (
        <TaskPopup onClose={() => setShowLoginPopup(false)}>
            <div className="flex w-[95vw] max-w-[72rem] min-h-[90vh] md:min-h-[48rem] rounded-2xl overflow-hidden bg-mainbg text-white">
              
              <div className="hidden md:flex w-1/2">
                <img
                  src="/assets/login.jpg"
                  alt="Login photo"
                  className="w-full h-full object-cover"
                />
              </div>


              
                <div className="flex w-full md:w-1/2">
                  <div className="w-full px-4 py-6 sm:px-6 md:px-8 md:py-12 flex flex-col justify-center">
                    <LoginPage
                      
                  />
                  </div>
                </div>  
              
            </div>    
        </TaskPopup>
      )}
      {showSignUpPopup && (
        <TaskPopup onClose={() => setShowSignUpPopup(false)}>
          <div className="flex w-[95vw] max-w-[72rem] min-h-[90vh] md:min-h-[48rem] rounded-2xl overflow-hidden bg-mainbg text-white">

          
            <div className="hidden md:flex w-1/2">
              <img
                src="/assets/login.jpg"
                alt="Signup photo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex w-full md:w-1/2">
              <div className="w-full px-4 py-6 sm:px-6 md:px-8 md:py-12 flex flex-col justify-center">
                <SignupPage />
              </div>
            </div>

          </div>
        </TaskPopup>
      )}

      

    </>
  );
}

export default Header;
