export type CategoriesType =
  | "electronics"
  | "clothings"
  | "home_appliances"
  | "mobile_phones"
  | "sports"
  | "books"
  | "toys"
  | "health_beauty";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: CategoriesType;
  thumbnail: string;
  images: string[];
  cartCount?: number;
};
