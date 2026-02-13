import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function useLogin() {
    
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
    
    return { control, handleSubmit, handleLogin }
}

export default useLogin
