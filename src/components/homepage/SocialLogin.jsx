import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="col-span-3">
      <p className="font-semibold text-[20px] mb-5 text-[#403F3F]">
        Login With
      </p>
      <div className="flex flex-col gap-5 ">
        <button className="btn w-full bg-transparent border-2 border-[#403F3F]">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn w-full bg-transparent border-2 border-[#403F3F]">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <button></button>
    </div>
  );
};

export default SocialLogin;
