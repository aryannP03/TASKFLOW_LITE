import React from "react";
import Header from "../../components/header/Header";

function WelcomePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 flex h-full items-center justify-center bg-mainbg">
        <h1 className="text-2xl font-bold text-white/80 sm:text-6xl sm:text-extrabold"
        >Welcome to TaskFlow-Lite</h1>
        
      </main>
    </div>
  );
}

export default WelcomePage;