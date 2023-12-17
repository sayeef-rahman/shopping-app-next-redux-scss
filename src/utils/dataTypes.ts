export type CategoriesType =
  | "smartphones"
  | "laptops"
  | "fragrances"
  | "skincare"
  | "groceries"
  | "home-decoration"
  | "furniture"
  | "tops"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches"
  | "sunglasses"
  | "automotive"
  | "motorcycle"
  | "lighting";

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
};
