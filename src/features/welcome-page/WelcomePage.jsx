import React from "react";
import Header from "../../components/header/Header";

function WelcomePage() {
  return (
    <>
      <Header />

      <main className="flex h-screen items-center justify-center border-t bg-mainbg">
        <h1 className="text-6xl font-extrabold text-white/80"
        >Welcome to TaskFlow-Lite</h1>
        
      </main>
    </>
  );
}

export default WelcomePage;