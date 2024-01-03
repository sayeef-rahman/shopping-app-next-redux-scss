import CategoryCard from "@/components/CategoryCard";
import { SingleCategoryType, categoriesData } from "@/utils/data";

const AllCategoriesPage = () => {
  return (
    <div>
      <h1 className="categories-page-title">Available Categories</h1>
      <div className="comntainer container-md container-sm category-list">
        {categoriesData.map((category: SingleCategoryType, index: number) => {
          return <CategoryCard category={category} key={category.name} />;
        })}
      </div>
    </div>
  );
};

export default AllCategoriesPage;
