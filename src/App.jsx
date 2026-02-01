import { useState } from 'react'
import './App.css'
import Dashboard from "./features/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoutes';
import LoginPage from './components/Login';
import WelcomePage from './features/welcome-page/WelcomePage';


function App() {
  return (
    <Routes>
      <Route path="/login" 
      element={<LoginPage />} />
      
      <Route path="/welcome-page" 
      element={<WelcomePage />} />
      
      <Route element={<ProtectedRoutes />}> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
        

      <Route path="*" element={<Navigate to="/welcome-page" />} />
    </Routes>
  )
}

export default App
