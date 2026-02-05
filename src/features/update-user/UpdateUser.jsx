import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CommonFormField from "../../components/CommonFormField";
import USER_UPDATE from "./constants";
import { editUser } from "../usersSlice";

function UpdateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.users.currentUser);
  console.log("current user data:", user);
  

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
      
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        email: user.email || "",
        username: user.username || "",
        phone: user.phone || "",
        above18: user.above18 || false,
        gender: user.gender || "",
        address: user.address || "",
        zipcode: user.zipcode || "",
        state: user.state || "",
        
      });
    }
  }, [user, reset]);

  const handleUpdate = (data) => {
    dispatch(editUser({ id: user.id, updatedData:data }));
    navigate("/dashboard");
  };

  return (
    <>
      <div
      className="min-h-screen flex items-center justify-center px-4 bg-mainbg">

        <div className="w-full max-w-5xl rounded-2xl bg-[#240b3d] p-8 shadow-2xl" >      
            <div>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        Personal Information
                    </h2>

                    <div className="flex flex-col items-center gap-2">
                        <img
                        src="\assets\userimage.jpg"
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full border-2 border-white/30"
                        />

                        <h3 className="text-lg font-medium text-white">
                        Jason Miller
                        </h3>

                        <p className="text-sm text-white/70">
                        User Id: jason11
                        </p>
                    </div>
                    </div>
            </div>    

            <div>    
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">    
                        {USER_UPDATE.map((field) => (
                        <CommonFormField
                            key={field.name}
                            config={field}
                            control={control}
                        />
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">    
                        <button
                        type="submit"
                        className="px-12 py-3 rounded-full bg-amber-300 text-white font-medium shadow-lg hover:opacity-90 transition"
                        >
                        Update
                        </button>
                    </div>
                </form>
            </div>
        </div>      
      </div>  
    </>
  );
}

export default UpdateUser;
