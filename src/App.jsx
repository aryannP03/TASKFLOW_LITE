import { useState } from 'react'
import './App.css'
import LoginPage from './components/Login'
import Dashboard from "./features/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" 
      element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App
