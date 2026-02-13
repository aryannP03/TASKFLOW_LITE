import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import USER_SIGNUP from "../sign-up/constants";
import { useForm } from "react-hook-form";
import CommonFormField from "../../common/common-form-fields/CommonFormField";
import { useDispatch } from "react-redux";
import { useAdduserMutation } from "../usersSlice2";
import useSignUp from "./hooks/useSignUp";
// import { addUser } from "../usersSlice";



function SignupPage() {

    const { control, handleSubmit, handleLogin, handleSignup } = useSignUp() 
  

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-2">
        Sign Up
      </h2>

      <div className="flex justify-between items-center mt-6 md:mt-10 mb-6 md:mb-10">  
          <span className="bg-white flex-1 max-w-[8.75rem] h-[1.15px]"></span>
            <p className="text-center text-[14px] sm:text-[16px] md:text-[18.33px] opacity-80">
              Sign Up with email
            </p>
          <span className="bg-white flex-1 max-w-[8.75rem] h-[1.15px]"></span>  
      </div> 

      <form onSubmit={handleSubmit(handleSignup)}>
        {USER_SIGNUP.map((field) => (
          <CommonFormField
            key={field.name}
            config={field}
            control={control}
          />
        ))}

        <button
          type="submit"
          className="w-full mt-4 md:mt-12 bg-btn-clr text-white py-2 rounded-[10px]"
        >
          Signup
        </button>
      </form>
    </>
  );
}

export default SignupPage;
