import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useAdduserMutation } from '../../usersSlice2'
import { useForm } from 'react-hook-form'


function useSignUp() {
  
  const { login } = useAuth()
  const navigate = useNavigate()
  const [addUser] = useAdduserMutation()

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
  
  
    const handleSignup = async (data) => {
      const result = await (addUser(data)).unwrap()
      console.log("data is : ", result.id);
      localStorage.setItem("userId", result.id)
      login(data);
      navigate("/dashboard");
      }
      
    return { control, handleSubmit, handleSignup }  
}

export default useSignUp
