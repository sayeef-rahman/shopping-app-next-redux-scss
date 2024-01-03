import CartPage from "@/components/CartPage";
import ProductCard from "@/components/ProductCard";
import { toysData } from "@/utils/data";
import { ProductType } from "@/utils/dataTypes";

const ToysCategoryPage = () => {
  return (
    <>
      <div className="container">
        <div className="category-heading-wrapper">
          <h1 className="category-heading">TOYS</h1>
        </div>
        <div className="productsWithCartList">
          <div className="cart-card-wrapper">
            {toysData?.map((product: ProductType) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
          <CartPage />
        </div>
      </div>
    </>
  );
};

export default ToysCategoryPage;
