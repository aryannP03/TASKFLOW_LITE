import { useState } from 'react'
import './App.css'
import Dashboard from "./features/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoutes';
import LoginPage from './components/Login';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/login" 
      element={<LoginPage />} />

      
        <Route element={<ProtectedRoutes />}> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    </AuthProvider>
  )
}

export default App
