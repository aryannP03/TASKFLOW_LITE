import { useEffect } from 'react'
import './App.css'
import Dashboard from "./components/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoutes';
import LoginPage from './components/login/Login';
import WelcomePage from './components/welcome-page/WelcomePage';
import UpdateUser from './components/update-user/UpdateUser';
import toast, { Toaster } from "react-hot-toast";
import useIsOnline from './hooks/useIsOnline';

function App() {

  const isOnline = useIsOnline()

  useEffect( () => {
    if(!isOnline) 
      toast(
      () => (
        <div className="flex items-center gap-4">
          <span>You are offline</span>
          <button
            className="text-amber-400 font-semibold hover:underline">
            Retry
          </button>
        </div>
      ),
      { duration: 8000 }
    );
  },[isOnline])


  return (
    <>
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#161622",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)"
          }
        }}
      />
      
    <Routes>
      <Route path="/login" 
      element={<LoginPage />} />
      
      <Route path="/update-user" 
      element={<UpdateUser />} />
      
      <Route path="/welcome-page" 
      element={<WelcomePage />} />
      
      <Route element={<ProtectedRoutes />}> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
        

      <Route path="*" element={<Navigate to="/welcome-page" />} />
    </Routes>

    </>
  )
}

export default App
