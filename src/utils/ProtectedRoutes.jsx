import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



const ProtectedRoutes = () => {
    const token = localStorage.getItem("token")
    return token ? <Outlet/> : <Navigate to='/login' />
}

export default ProtectedRoutes