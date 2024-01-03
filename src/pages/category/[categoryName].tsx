import ProductCard from "@/components/ProductCard";
import { CategoriesType, ProductType } from "@/utils/dataTypes";

import CartPorductCard from "@/components/CartPorductCard";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { useSelector } from "react-redux";
import type { RootState } from "../_app";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import CartPage from "@/components/CartPage";

const CategoryPage = ({
  products,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const state = useSelector((state: RootState) => state);
  const router = useRouter();
  const [categoryName, setCategoryName] = useState<any>(null);

  useEffect(() => {
    if (router?.query?.categoryName) {
      setCategoryName(router?.query?.categoryName);
    } else {
      setCategoryName(null);
    }
  }, [router?.query?.categoryName]);

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
    <>
      <div className="container">
        <div className="category-heading-wrapper">
          <h1 className="category-heading">
            {categoryName ? categoryName.toLocaleUpperCase() : ""}
          </h1>
        </div>
        <div className="productsWithCartList">
          <div className="cart-card-wrapper">
            {products?.map((product: ProductType, index: number) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>
          <CartPage />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;

export const getServerSideProps = (async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { params } = context;
  const responde = await fetch(
    `https://dummyjson.com/products/category/${
      params?.categoryName === "electronics"
        ? "automotive"
        : params?.categoryName === "clothings"
        ? "womens-dresses"
        : params?.categoryName === "home_appliances"
        ? "lighting"
        : params?.categoryName === "health-beauty"
        ? "skincare"
        : params?.categoryName
    }`
  );
  const apiData = await responde.json();
  if (apiData.products) {
    return {
      props: {
        products: apiData.products,
      },
    };
  } else {
    return {
      props: {
        products: [],
      },
    };
  }
}) satisfies GetServerSideProps<{ products: ProductType[] | [] }>;
