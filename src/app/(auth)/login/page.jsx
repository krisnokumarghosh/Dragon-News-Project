'use client'

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

  const {register, handleSubmit, formState: { errors }} = useForm();

  const handleLoginFunc = (data) => {
    console.log(data);
    
  }
console.log(errors);

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="py-19 mt-10 px-7 md:px-18.25 shadow border border-base-200 rounded-xl bg-white w-full md:w-160">
        <h2 className="text-center text-[20px] md:text-[30px] font-semibold text-[#403F3F] mb-12.5">
          Login to your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset bg-white rounded-box w-full  p-4">
            <label className="label mt-5 font-semibold text-[17px] md:text-[20px] text-[#403F3F]">
              Email address
            </label>
            <input
              type="email"
              className="input p-5 w-full border-0 bg-[#F3F3F3]"
              placeholder="Email"
              {...register("email", { required: "Required field can't be empty" })}
            />
            {
              errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>
            }

            <label className="label mt-5 font-semibold text-[17px] md:text-[20px] text-[#403F3F]">
              Password
            </label>
            <input
              type="password"
              className="input p-5 w-full border-0 bg-[#F3F3F3]"
              placeholder="Password"
              {...register("password", { required: "Required field can't be empty" })}
            />
            {
              errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>
            }

            <button className="btn  bg-[#403F3F] text-white mt-6 font-semibold">
              Login
            </button>
          </fieldset>
        </form>
        <p className="mt-7.5 text-center text-[13px] md:text-[16px] font-semibold text-[#706F6F]">
          Dont Have An Account ?{" "}
          <Link className="text-[#F75B5F]" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
