import { useState } from 'react'
import './App.css'
import Dashboard from "./features/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoutes';
import LoginPage from './features/login/Login';
import WelcomePage from './features/welcome-page/WelcomePage';
import UpdateUser from './features/update-user/UpdateUser';
import { Toaster } from "react-hot-toast";


function App() {
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
