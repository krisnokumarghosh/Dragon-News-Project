import Link from "next/link";
import React from "react";

const Categories = ({ categories , activeId }) => {
  return (
    <div className="col-span-3">
      <p className="font-semibold text-[20px] mb-5 text-[#403F3F]">
        All Caterogy
      </p>

      <ul className=" space-y-4  ">
        {categories.map((category, ind) => {
          return (
            <Link
            href={`/category/${category.category_id}`}
              className={`
                bg-[#E7E7E7] btn w-66.75 py-4.25 hover:bg-[#D72050] hover:text-white
                 ${activeId === category.category_id && "bg-[#d72051fb] text-white"}
                `}
              key={ind}
            >
              {category.category_name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
