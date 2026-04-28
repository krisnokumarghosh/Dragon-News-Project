'use client';

import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {

  const handleGoogleSignIn = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  };


  const handleGithubSignIn = async() => {
   const data = await authClient.signIn.social({
        provider: "github"
    });
  };

  return (
    <div className="col-span-3">
      <p className="font-semibold text-[20px] mb-5 text-[#403F3F]">
        Login With
      </p>
      <div className="flex flex-col gap-5 ">
        <button 
        onClick={handleGoogleSignIn}
        className="btn w-full bg-transparent border-2 border-[#403F3F]">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button 
        onClick={handleGithubSignIn}
        className="btn w-full bg-transparent border-2 border-[#403F3F]">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <button></button>
    </div>
  );
};

export default SocialLogin;
