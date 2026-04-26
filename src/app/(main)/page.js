import { Ultra } from "next/font/google";
import Image from "next/image";


  const getCategories = async () => {
      const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
      const data = await res.json();
      return data.data.news_category;
  }


export default async function Home() {

  const categories = await getCategories();
  console.log(categories);
  

  return (
    <div className="my-20 container mx-auto grid grid-cols-12 justify-items-center  gap-4">

      <div className="col-span-3">
        <p className="font-semibold text-[20px] mb-5 text-[#403F3F]">All Caterogy</p>

        <ul className=" space-y-4 text-start ">
          {
          categories.map((category , ind) => {
            return(
              
                <li className="bg-[#E7E7E7] btn w-66.75 py-4.25" key={ind}>{category.category_name}</li>

            )
          })
        }
        </ul>

      </div>


      <div className="col-span-6">
         <p className="font-semibold text-[20px] text-[#403F3F]">Dragon News Home</p>
      </div>


      <div className="col-span-3">
         <p className="font-semibold text-[20px] text-[#403F3F]">Login With</p> 
      </div>

    </div>
  );
}
