import Categories from "@/components/homepage/Categories";
import NewsCard from "@/components/homepage/NewsCard";
import SocialLogin from "@/components/homepage/SocialLogin";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";


const CategoryNews = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="my-20 container mx-auto grid grid-cols-12 justify-items-center  gap-4">
      <Categories categories={categories} activeId={id}></Categories>

      <div className="col-span-6">
        <p className="font-semibold mb-5 text-center text-[20px] text-[#403F3F]">
          Dragon News Home
        </p>
        <div className="space-y-6">
          {news.map((n, ind) => {
            return (
              <NewsCard 
              n={n}
              key={ind}>
              </NewsCard>
            );
          })}
        </div>
      </div>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default CategoryNews;
