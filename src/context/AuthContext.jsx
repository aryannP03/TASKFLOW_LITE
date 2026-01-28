import React, {createContext, useContext, useEffect, useState} from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const[isAuthenticated, setIsAuthenticated] = useState(false)

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
        setIsAuthenticated(false)
    }

    
    return (
        <AuthContext.Provider value={
            {login, logout, isAuthenticated}}>
                {children}
            </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
