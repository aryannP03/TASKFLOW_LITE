import React from 'react'
import { useState } from 'react';
import {useForm} from "react-hook-form"
import { minLength } from 'zod';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from "react-router-dom"
import CommonForm from './CommonForm';
import Header from './header/Header';

function LoginPage() {
    
    const { login } = useAuth()
    const navigate = useNavigate()

    const[userId, setuserId] = useState("")

    const handleLogin = (data) => {
        login(data)
        navigate("/dashboard")
    }

    return (
        <>
            <Header />
            <h2>Login</h2>
            <CommonForm
                onSubmit={handleLogin}
                buttonText="Login"
            />                
        </>    
    )
}

export default LoginPage
