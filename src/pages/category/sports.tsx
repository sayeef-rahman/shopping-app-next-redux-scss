import CartPage from "@/components/CartPage";
import ProductCard from "@/components/ProductCard";
import { sportsAccessories } from "@/utils/data";
import { ProductType } from "@/utils/dataTypes";

const SportsCategoryPage = () => {
  return (
    <div className="container">
      <div className="category-heading-wrapper">
        <h1 className="category-heading">SPORTS</h1>
      </div>
      <div className="productsWithCartList">
        <div className="cart-card-wrapper">
          {sportsAccessories?.map((product: ProductType, index: number) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <CartPage />
      </div>
    </div>
  );
};

export default SportsCategoryPage;
