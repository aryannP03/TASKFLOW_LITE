import React from "react";
import { useForm, Controller } from "react-hook-form";

function CommonForm({ onSubmit, buttonText = "Submit" }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        userId: "",
        password: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>User Id :</label>
      <Controller
        name="userId"
        control={control}
        rules={{
          required: "User Id is required",
          minLength: {
            value: 2,
            message: "Minimum length is 2",
          },
          maxLength: {
            value: 10,
            message: "Maximum length is 10",
          },
        }}
        render={({ field }) => (
          <input type="text" {...field} />
        )}
      />
      {errors.userId && <p>{errors.userId.message}</p>}

      <br />

      <label>Password :</label>
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
        }}
        render={({ field }) => (
          <input type="password" {...field} />
        )}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <br />

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default CommonForm
