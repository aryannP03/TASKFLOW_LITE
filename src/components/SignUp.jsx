import React from "react";
import AuthForm from "../components/AuthForm";

function SignupPage() {
  const handleSignup = (data) => {
    console.log("Signup data:", data);
  };

  return (
    <>
      <h2>Signup</h2>
      <AuthForm
        onSubmit={handleSignup}
        buttonText="Signup"
      />
    </>
  );
}

export default SignupPage;
