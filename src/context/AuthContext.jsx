import React, {createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()


export function AuthProvider({ children }) {
    const[isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token)
            setIsAuthenticated(true)
        else
            setIsAuthenticated(false)
    }, [])

    const login = () => {
        localStorage.setItem('token', 'temp-token')
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        setIsAuthenticated(false)
        navigate('/welcome-page')
    }

    
    return (
        <AuthContext.Provider value={
            {login, logout, isAuthenticated}}>
                {children}
            </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
