import Image from "next/image";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import newsImg from "@/assets/Rectangle 3979.png"
import Link from "next/link";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ n }) => {
  return (
    <div className="card  bg-[#FFFFFF] border border-base-300 shadow-sm">
       <div className="bg-[#F3F3F3] py-4 px-5 flex justify-between items-center">
         <div className=" flex items-center gap-5">
            <Image className="rounded-full" height={40} width={40} alt="author image" src={n.author?.img}></Image>
            <div>
                <p className="font-semibold text-[#403F3F]">{n.author?.name}</p>
                <p className="text-[#706F6F] text-[14px]">{n.author?.published_date}</p>
            </div>
        </div>
        <div className="flex gap-3 items-center">
            <CiBookmark className="text-2xl" />
            <CiShare2 className="text-2xl"/>
        </div>
       </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[20px] text-[#403F3F] font-bold text-start">
          {n.title}
        </h2>
      </div>
      <figure className="px-10 py-10">
       <Image 
        height={262}
         width={518}
         alt="news img"
         src={newsImg}
          className="w-full"
         ></Image>
      </figure>
      <p className="text-[#706F6F] line-clamp-4 text-[15px] px-6">
        {n.details}
      </p>
      <Link className="px-6 mt-2" href={`/news/${n._id}`}>
      <p
      className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#F75B5F] to-[#FF8C47]"
      >Read More</p>
      </Link>
      <div className="divider px-6"></div>
      <div className="p-6 flex justify-between items-center">
        <div className="text-[#706F6F] flex  gap-2">
          <CiStar className="text-xl" /> 
          <p>{n.rating.number}</p> 
        </div>
        <div className="text-[#706F6F] flex items-center gap-2">
          <IoEye  className="text-xl" /> 
          <p>{n.total_view}</p> 
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
