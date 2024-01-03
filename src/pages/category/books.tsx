import CartPage from "@/components/CartPage";
import ProductCard from "@/components/ProductCard";
import { booksData } from "@/utils/data";
import { ProductType } from "@/utils/dataTypes";

const BooksCategoryPage = () => {
  return (
    <div className="container">
      <div className="category-heading-wrapper">
        <h1 className="category-heading">BOOKS</h1>
      </div>
      <div className="productsWithCartList">
        <div className="cart-card-wrapper">
          {booksData?.map((product: ProductType) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <CartPage />
      </div>
    </div>
  );
};

export default BooksCategoryPage;
