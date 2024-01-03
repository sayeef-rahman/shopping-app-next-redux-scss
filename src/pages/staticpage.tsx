import { ProductType } from "@/utils/dataTypes";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

// interface ProductType {
//   id: number;
//   name: string;
//   category: string;
// }

interface Props {
  products?: ProductType[] | null;
  error?: string;
  isLoading?: boolean;
}

const StaticPage: NextPage<Props> = ({ products, error, isLoading }: Props) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {/* <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

// export const getStaticPaths = (async () => {
//   return {
//     paths: ["1"],
//     fallback: true, // false or "blocking"
//   };
// }) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();
    if (products.products) {
      return {
        props: {
          products,
          isLoading: false,
        },
      };
    } else
      return {
        props: {
          products: null,
          isLoading: false,
        },
      };
  } catch (error) {
    return {
      props: {
        error: "Failed to fetch data",
        isLoading: false,
      },
    };
  }
};

export default StaticPage;
