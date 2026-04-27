import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import React from "react";
import newsBanner from "@/assets/Rectangle 3979.png";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  
    return{
        title: news.title,
        description: news.description
    }

};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetailsById(id);
  console.log(news);

  return (
    <div className="container mx-auto my-10">
      <p className="font-semibold text-[20px] mb-5 text-[#403F3F]">
        Dragon news
      </p>
      <div className="border border-base-300 p-7.5 max-w-212.25 mx-auto">
        <Image width={789} src={newsBanner} alt="news banner"></Image>
        <h3 className="mt-5 text-[#403F3F] text-[25px] font-bold text-start">
          {news.title}
        </h3>
        <p className="mt-2 mb-8 text-[#706F6F]">{news.details}</p>
        <Link href={`/category/${news.category_id}`}>
          <button className="btn text-white bg-[#D72050]">
            All news in this category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
