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
      <h2 className="text-3xl font-bold text-center mb-2 mt-[1rem]">
        Login
      </h2>

      <p className="text-center text-sm opacity-80 mb-6 mt[14rem]">
        Login with email
      </p>

      <form onSubmit={handleSubmit(handleLogin)}>
        {USER_LOGIN.map((field) => (
          <CommonFormField
            className=""
            key={field.name}
            config={field}
            control={control}
          />
        ))}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>

      <p className="text-right text-sm mt-2 cursor-pointer opacity-80">
        Forgot Your Password?
      </p>

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
