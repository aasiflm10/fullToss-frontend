

import { MultiCarousel } from "./MultiCarousel";
import { ProductCard } from "./ProductCard";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

//this list needs to be an array of latest products
export function ItemsTrayComponent({
  name,
  list,
}: {
  name: string;
  list: Product[];
}) {

  const products = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Product 1",
      stars: "⭐⭐⭐⭐",
      price: "$100",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Product 2",
      stars: "⭐⭐⭐",
      price: "$150",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Product 3",
      stars: "⭐⭐⭐⭐⭐",
      price: "$200",
    },
    {
      id: 4,
      src: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Product 4",
      stars: "⭐⭐⭐⭐",
      price: "$250",
    },
  ];

  return (
    <div>
      <h1>{name}</h1>
      <MultiCarousel products={products}/>
    </div>
  );
}
