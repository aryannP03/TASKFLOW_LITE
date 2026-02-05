import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import USER_LOGIN from "./constants";
import CommonFormField from "../../components/CommonFormField";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data) => {
    login(data);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="">
        <h2 className="mt-16 font-poppins font-semibold text-[28px] tracking-normal text-center">
          Login
        </h2>
      </div>
     
      <div className="flex justify-around items-center mt-10 mb-10">  
          <span className="bg-white w-35 h-[1.15px]"></span>
          <p className="text-[18.33px]">
            Login with email
          </p>
          <span className="bg-white w-35 h-[1.15px]"></span>  
      </div>  

      <form onSubmit={handleSubmit(handleLogin)}>
        {USER_LOGIN.map((field) => (
          <CommonFormField
            className=""
            key={field.name}
            config={field}
            control={control}
          />
        ))}

        <p className="text-right text-sm mt-0 cursor-pointer opacity-80">
        Forgot Your Password?
        </p>

        <button
          type="submit"
          className="w-full mt-4 bg-btn-clr text-white py-2 rounded-[10px]"
        >
          Login
        </button>
      </form>

      

      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <span className="text-secondary cursor-pointer">
          <button>
            Sign Up
            </button>
        </span>
      </p>
    </>
  );
}

export default LoginPage;
