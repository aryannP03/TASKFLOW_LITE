import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CommonFormField from "../../common/common-form-fields/CommonFormField";
import USER_UPDATE from "./constants";
// import { editUser } from "../usersSlice";
import { useGetuserbyidQuery, useEdituserbyidMutation } from "../usersSlice2";

function UpdateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const currentUser = localStorage.getItem('userId')
  // console.log("curr user is :",currentUser);
  
  const {data:user} = useGetuserbyidQuery(currentUser)
  const [editUser] = useEdituserbyidMutation()

  // const user = useGetuserbyidQuery(currentUser)
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
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 bg-update-form-bg">
        <div className="w-full max-w-5xl rounded-2xl bg-mainbg px-4 py-6 sm:px-6 sm:py-8 md:p-8 shadow-2xl">

          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-4">
              Personal Information
            </h2>

            <div className="flex flex-col items-center gap-2">
              <img
                src="/assets/userimage.jpg"
                alt="User Avatar"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/30"
              />

              <h3 className="text-base sm:text-lg font-medium text-white">
                 {user?.fullname || "User"}
              </h3>

              <p className="text-sm text-white/70">
                User Id: jason11
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-x-6 md:gap-y-4">
              {USER_UPDATE.map((field) => (
                <CommonFormField
                  key={field.name}
                  config={field}
                  control={control}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8 sm:mt-10">
              <button
                type="submit"
                className="px-8 sm:px-12 py-3 rounded-full w-full sm:w-auto bg-update-form-btn text-save-update-btn font-medium shadow-lg hover:opacity-90 transition"
              >
                Update
              </button>
            </div>
          </form>

        </div>
      </div>

    </>
  );
}

export default UpdateUser;
