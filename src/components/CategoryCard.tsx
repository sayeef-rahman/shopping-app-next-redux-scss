import { SingleCategoryType } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type CategoryCardPropsType = {
  category: SingleCategoryType;
};

const CategoryCard = ({ category }: CategoryCardPropsType) => {
  const router = useRouter();
  const handleRedirect = (categoryName: string) => {
    router.push(`/category/${categoryName}`);
  };
  return (
    <div
      className="single-catgory-card"
      onClick={() => {
        handleRedirect(category.name);
      }}
    >
      <Image
        className="category-icon"
        src={category.icon}
        alt="user profile picture"
      />
      <p className="category-name">
        {category.name.toLocaleUpperCase().replace("_", " ")}
      </p>
    </div>
  );
};

export default CategoryCard;
