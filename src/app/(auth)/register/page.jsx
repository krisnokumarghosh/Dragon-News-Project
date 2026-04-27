'use client'

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

  const {register, handleSubmit, formState: { errors }} = useForm();

  const handleRegisterFunc = (data) => {
    console.log(data);
    
  }
console.log(errors);

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="py-19 mt-10 px-7 md:px-18.25 shadow border border-base-200 rounded-xl bg-white w-full md:w-160">
        <h2 className="text-center text-[20px] md:text-[30px] font-semibold text-[#403F3F] mb-12.5">
          Register your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset bg-white rounded-box w-full  p-4">
            <label className="label font-semibold text-[17px] md:text-[20px] text-[#403F3F]">
              Name
            </label>
            <input
              type="text"
              className="input p-5 w-full border-0 bg-[#F3F3F3]"
              placeholder="Enter Your Name"
              {...register("name", { required: "Required field can't be empty" })}
            />
            {
              errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>
            }


             <label className="label mt-5 font-semibold text-[17px] md:text-[20px] text-[#403F3F]">
              Photo URL
            </label>
            <input
              type="text"
              className="input p-5 w-full border-0 bg-[#F3F3F3]"
              placeholder="Enter Your Photo URL"
              {...register("photoUrl", { required: "Required field can't be empty" })}
            />
            {
              errors.photoUrl && <p className="mt-1 text-red-500">{errors.photoUrl.message}</p>
            }


            <label className="label mt-5 font-semibold text-[17px] md:text-[20px] text-[#403F3F]">
              Email address
            </label>
            <input
              type="email"
              className="input p-5 w-full border-0 bg-[#F3F3F3]"
              placeholder="Enter Your Email"
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
              placeholder="Enter Password"
              {...register("password", { required: "Required field can't be empty" })}
            />
            {
              errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>
            }

            <button className="btn  bg-[#403F3F] text-white mt-6 font-semibold">
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
