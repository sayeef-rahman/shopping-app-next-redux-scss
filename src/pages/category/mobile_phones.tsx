import CartPorductCard from "@/components/CartPorductCard";
import ProductCard from "@/components/ProductCard";
import { mobileCategoriesData } from "@/utils/data";
import { ProductType } from "@/utils/dataTypes";
import { useSelector } from "react-redux";
import { RootState } from "../_app";
import { useMemo } from "react";
import CartPage from "@/components/CartPage";

const PhoneCategoryPage = () => {
  const state = useSelector((state: RootState) => state);
  const cachedValue = useMemo(() => {
    let totalPrice: number = 0;
    if (state.cart.length) {
      state.cart.forEach((item) => {
        if (item.cartCount) {
          totalPrice += item.price * item.cartCount;
        } else {
          totalPrice += item.price * 1;
        }
      });
    }
    return totalPrice;
  }, [state.cart]);
  return (
    <div className="container">
      <div className="category-heading-wrapper">
        <h1 className="category-heading">MOBILE PHONES</h1>
      </div>
      <div className="productsWithCartList">
        <div className="cart-card-wrapper">
          {mobileCategoriesData?.map((product: ProductType, index: number) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
        <CartPage />
      </div>
    </div>
  );
};

export default PhoneCategoryPage;
