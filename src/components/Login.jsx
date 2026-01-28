import React from 'react'
import { useState } from 'react';
import {useForm} from "react-hook-form"
import { minLength } from 'zod';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from "react-router-dom"

function LoginPage() {
    
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm()

    const { login } = useAuth()
    const navigate = useNavigate()

    const[userId, setuserId] = useState("")

    const onSubmit = (data) => {
    login()
    navigate("/dashboard")
    reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>User Id :</label>
                <input type="text" {
                    ...register("userId",
                    {required: "user id is Required", 
                        minLength:{value:2, 
                        message:"minimum length is two"}, 
                        maxLength:{value:10, message:"max length is 10"}}
                )}
                />
                {errors.userId && <p>{errors.userId.message}</p>}

                <br />
                <label>Password :</label>
                <input
                    type="password" {
                    ...register("password",
                    {required: {value:true, message:"password is required"}})} />
                    
                    {errors.password && <p>{errors.password.message}</p>}
                <br />

                <input type="submit" />
            </form>
            
        </>    
    )
}

export default LoginPage
