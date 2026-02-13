import USER_LOGIN from "./constants";
import CommonFormField from "../../common/common-form-fields/CommonFormField";
import useLogin from "./hooks/useLogin";

function LoginPage() {

  const { control, handleSubmit, handleLogin } = useLogin()

  return (
    <>
      <div className="">
        <h2 className="mt-8 md:mt-16 font-poppins font-semibold text-[22px] sm:text-[26px] md:text-[28px] text-center">
          Login
        </h2>
      </div>
     
      <div className="flex justify-between items-center mt-6 md:mt-10 mb-6 md:mb-10">  
          <span className="bg-white flex-1 max-w-[8.75rem] h-[1.15px]"></span>
          <p className="text-[14px] sm:text-[16px] md:text-[18.33px]">
            Login with email
          </p>
          <span className="bg-white flex-1 max-w-[8.75rem] h-[1.15px]"></span>  
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

        <p className="text-center text-sm mt-0 cursor-pointer opacity-80">
        Forgot Your Password?
        </p>

        <button
          type="submit"
          className="w-full mt-4 md:mt-16 bg-btn-clr text-white py-2 rounded-[10px]"
        >
          Login
        </button>
      </form>

      

      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <span className="text-secondary cursor-pointer">
          <button 
            className="underline text-amber-500"
            >
            Sign Up
            </button>
        </span>
      </p>

      
    </>
  );
}

export default LoginPage;
