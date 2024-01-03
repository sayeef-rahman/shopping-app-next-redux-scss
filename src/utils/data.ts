import { ProductType } from "./dataTypes";
import electronicIcon from "../../public/electronicIcon.jpg";
import clothingIcon from "../../public/clothingIcon.jpg";
import homeApplianceIcon from "../../public/homeAppliance.jpg";
import mobilePhoneIcon from "../../public/phoneIcon.jpg";
import sportsIcon from "../../public/sportsIcon.jpg";
import booksIcon from "../../public/bookIcon.jpg";
import toysIcon from "../../public/toysIcon.jpg";
import healthBautyIcon from "../../public/healthIcon.jpg";
import { StaticImageData } from "next/image";
export type SingleCategoryType = {
  name: string;
  icon: StaticImageData;
};
export const categoriesData: SingleCategoryType[] = [
  { name: "electronics", icon: electronicIcon },
  { name: "clothings", icon: clothingIcon },
  { name: "home_appliances", icon: homeApplianceIcon },
  { name: "mobile_phones", icon: mobilePhoneIcon },
  { name: "sports", icon: sportsIcon },
  { name: "books", icon: booksIcon },
  { name: "toys", icon: toysIcon },
  { name: "health-beauty", icon: healthBautyIcon },
];

//   "electronics", -- https://dummyjson.com/products/category/automotive ------- complete
//   "clothings", -- https://dummyjson.com/products/category/womens-dresses      ----   https://dummyjson.com/products/category/mens-shirts  ---- cpmplete
//   "home-appliances", -- https://dummyjson.com/products/category/lighting    -------------   complete
//   "mobile_phones", -------------------- https://dummyjson.com/products/category/mobile_phones
//   "sports", ------- sportsAccessories ----------  complete
//   "books", --------- bookData ----------  complete
//   "toys",  ----------  toysData -------- complete
//   "health-beauty", --------https://dummyjson.com/products/category/skincare ------    complete

export const mobileCategoriesData: ProductType[] = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 3,
    brand: "Apple",
    category: "mobile_phones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "mobile_phones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "mobile_phones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "mobile_phones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "mobile_phones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
  },
];

export const sportsAccessories: ProductType[] = [
  {
    id: 1,
    title: "Running Shoes",
    description: "High-performance running shoes with cushioned soles.",
    price: 89.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 50,
    brand: "Hoka",
    category: "sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVwxdpgywVz6CltAaHFmWlqGNOw3uSgpf2R4MV2_6_kIlgm7DgVdF6konXtVjFYoeIPQ&usqp=CAU",
    images: [
      "https://example.com/shoes-image1.jpg",
      "https://example.com/shoes-image2.jpg",
    ],
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description: "Track your steps, heart rate, and workouts.",
    price: 49.99,
    discountPercentage: 0,
    rating: 4.2,
    stock: 100,
    brand: "Fitbit",
    category: "sports",
    thumbnail:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/719DSpWp3LL._AC_UY580_.jpg",
    images: [
      "https://example.com/fitbit-image1.jpg",
      "https://example.com/fitbit-image2.jpg",
    ],
  },
  {
    id: 4,
    title: "Resistance Bands Set",
    description: "Versatile bands for strength training and stretching.",
    price: 19.99,
    discountPercentage: 5,
    rating: 4.6,
    stock: 120,
    brand: "Fit Simplify",
    category: "sports",
    thumbnail:
      "https://hirakraja.com/4004-medium_default/11-pcsset-pull-rope-fitness-exercises-resistance-bands.jpg",
    images: [
      "https://example.com/resistance-bands-image1.jpg",
      "https://example.com/resistance-bands-image2.jpg",
    ],
  },
  {
    id: 3,
    title: "Yoga Mat",
    description: "Non-slip and comfortable mat for yoga practice.",
    price: 29.99,
    discountPercentage: 15,
    rating: 4.8,
    stock: 80,
    brand: "Liforme",
    category: "sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkbX2EY40LqfnOZRsGHUKRvSwSPDmEMUsNKwaS6QGP-Ge29lNd-4aNwcSNwoHopDHV8A&usqp=CAU",
    images: [
      "https://example.com/yoga-mat-image1.jpg",
      "https://example.com/yoga-mat-image2.jpg",
    ],
  },
  {
    id: 5,
    title: "Swimming Goggles",
    description: "Anti-fog and UV-protected goggles for swimming.",
    price: 14.99,
    discountPercentage: 20,
    rating: 4.3,
    stock: 60,
    brand: "Speedo",
    category: "sports",
    thumbnail:
      "https://ph-live-01.slatic.net/p/fae736a356dfb02bc88b9713f78487a1.jpg",
    images: [
      "https://example.com/swimming-goggles-image1.jpg",
      "https://example.com/swimming-goggles-image2.jpg",
    ],
  },
  {
    id: 6,
    title: "Tennis Racket",
    description: "Lightweight racket for tennis enthusiasts.",
    price: 79.99,
    discountPercentage: 5,
    rating: 4.7,
    stock: 30,
    brand: "Wilson",
    category: "sports",
    thumbnail:
      "https://cdn.nwscdn.com/media/catalog/product/cache/h700xw700/v/e/vermont-colt-is-a-tennis-racket-for-all-ages-to-enjoy_1.jpg",
    images: [
      "https://example.com/tennis-racket-image1.jpg",
      "https://example.com/tennis-racket-image2.jpg",
    ],
  },
  {
    id: 7,
    title: "Jump Rope",
    description: "Adjustable and durable skipping rope for cardio workouts.",
    price: 9.99,
    discountPercentage: 0,
    rating: 4.1,
    stock: 150,
    brand: "Fit Simplify",
    category: "sports",
    thumbnail:
      "https://go-zone.ca/cdn/shop/products/191730243369_2_2000x.jpg?v=1659717924",
    images: [
      "https://example.com/jump-rope-image1.jpg",
      "https://example.com/jump-rope-image2.jpg",
    ],
  },
];

export const booksData: ProductType[] = [
  {
    id: 1,
    title: "A Tale of Two Cities",
    description: "Description for Book 1",
    price: 7,
    discountPercentage: 0,
    rating: 4,
    stock: 26,
    brand: "Brand 1",
    category: "books",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tales_serial.jpg/220px-Tales_serial.jpg",
    images: [
      "https://example.com/book1_image1.jpg",
      "https://example.com/book1_image2.jpg",
    ],
  },
  {
    id: 2,
    title: "The Little Prince",
    description: "Description for Book 2",
    price: 85,
    discountPercentage: 23,
    rating: 2,
    stock: 44,
    brand: "Brand 2",
    category: "books",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG",
    images: [
      "https://example.com/book2_image1.jpg",
      "https://example.com/book2_image2.jpg",
    ],
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    description: "Description for Book 3",
    price: 18,
    discountPercentage: 26,
    rating: 3,
    stock: 46,
    brand: "Brand 3",
    category: "books",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/DaVinciCode.jpg/220px-DaVinciCode.jpg",
    images: [
      "https://example.com/book3_image1.jpg",
      "https://example.com/book3_image2.jpg",
    ],
  },
  {
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    description: "Description for Book 4",
    price: 33,
    discountPercentage: 26,
    rating: 4,
    stock: 20,
    brand: "Brand 4",
    category: "books",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png/220px-Harry_Potter_and_the_Half-Blood_Prince_cover.png",
    images: [
      "https://example.com/book4_image1.jpg",
      "https://example.com/book4_image2.jpg",
    ],
  },
  {
    id: 5,
    title: "The Alchemist",
    description: "Description for Book 5",
    price: 24,
    discountPercentage: 27,
    rating: 4,
    stock: 7,
    brand: "Brand 5",
    category: "books",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TheAlchemist.jpg/402px-TheAlchemist.jpg",
    images: [
      "https://example.com/book5_image1.jpg",
      "https://example.com/book5_image2.jpg",
    ],
  },
  {
    id: 6,
    title: "Black Beauty",
    description: "Description for Book 6",
    price: 29,
    discountPercentage: 7,
    rating: 5,
    stock: 30,
    brand: "Brand 6",
    category: "books",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/BlackBeautyCoverFirstEd1877.jpeg/220px-BlackBeautyCoverFirstEd1877.jpeg",
    images: [
      "https://example.com/book6_image1.jpg",
      "https://example.com/book6_image2.jpg",
    ],
  },
  {
    id: 10,
    title: "The Kite Runner",
    description: "Description for Book 10",
    price: 69,
    discountPercentage: 21,
    rating: 2,
    stock: 44,
    brand: "Brand 10",
    category: "books",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg?20220127174707",
    images: [
      "https://example.com/book10_image1.jpg",
      "https://example.com/book10_image2.jpg",
    ],
  },
];

export const toysData: ProductType[] = [
  {
    id: 1,
    title: "Stuffed Teddy Bear",
    description: "Soft and cuddly teddy bear for kids.",
    price: 19.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 50,
    brand: "CuddlyCo",
    category: "toys",
    thumbnail:
      "https://image.similarpng.com/very-thumbnail/2021/12/Brown-teddy-bear-and-toys-on-transparent-background-PNG.png",
    images: [
      "https://example.com/teddy-bear-image1.jpg",
      "https://example.com/teddy-bear-image2.jpg",
    ],
  },
  {
    id: 2,
    title: "LEGO City Fire Truck",
    description: "Buildable fire truck with mini-figures.",
    price: 29.99,
    discountPercentage: 15,
    rating: 4.8,
    stock: 30,
    brand: "LEGO",
    category: "toys",
    thumbnail:
      "https://ideascdn.lego.com/media/generate/lego_ci/ab5f6ca1-79fa-423f-b8ca-aa292e59e468/resize:950:633/webp",
    images: [
      "https://example.com/fire-truck-image1.jpg",
      "https://example.com/fire-truck-image2.jpg",
    ],
  },
];
