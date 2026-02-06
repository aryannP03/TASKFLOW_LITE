import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import USER_SIGNUP from "../sign-up/constants";
import { useForm } from "react-hook-form";
import CommonFormField from "../../components/CommonFormField";
import { useDispatch } from "react-redux";
import { addUser } from "../usersSlice";


function SignupPage() {

  const { login } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
      control,
      handleSubmit,
    } = useForm({
      defaultValues: {
        email: "",
        password: "",
        username: "",
        above18: false,
        phone: ""
      },
    });
  
  
    const handleSignup = (data) => {
      dispatch(addUser(data))
      login(data);
      navigate("/dashboard");
      }
  

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-2">
        Sign Up
      </h2>

      <p className="text-center text-sm opacity-80 mb-6">
        Sign Up with email
      </p>

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
