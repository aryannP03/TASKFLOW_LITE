import { useNavigate } from "react-router-dom";
import { useGetuserbyidQuery, useEdituserbyidMutation } from "../../usersSlice2";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast"

function useUpdateUser() {
    
    const navigate = useNavigate();

    
    const currentUser = localStorage.getItem('userId')
    
    const {data:user, isError} = useGetuserbyidQuery(currentUser)
    const [editUser] = useEdituserbyidMutation()


    const {
        control,
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
        email: "",
        username: "",
        phone: "",
        above18: false,
        gender: "",
        address: "",
        zipcode: "",
        state: "",
        dob: "",
        fullname: "",
        
        },
    });

    useEffect(() => {
        if (user) {
        reset({
            email: user.email,        
            username: user.username,
            phone: user.phone,
            above18: user.above18,
            gender: user.gender,
            address: user.address,
            zipcode: user.zipcode,
            state: user.state,
            dob: user.dob,
            fullname: user.fullname,

            
        });
        }
    }, [user, reset]);

    const handleUpdate = async (data) => {
        await editUser({ id: user.id, updatedData:data })
        navigate("/dashboard");
    }

    useEffect(() => {
        if (isError) {
        toast.error("Unable to load your profile. Please try again.")
        }
    }, [isError])
    
    return { user, isError, control, handleSubmit, handleUpdate }
}

export default useUpdateUser
