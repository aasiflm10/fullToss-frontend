import { MultiCarousel } from "./MultiCarousel";

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
  products,
  loading
}: {
  name: string;
  products: Product[];
  loading : boolean
}) {
  // const DemoProducts = [
  //   {
  //     id: 1,
  //     imageUrl: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Product 1",
  //     stars: "⭐⭐⭐⭐",
  //     price: 100,
  //     description :"Hi there"
  //   },
  //   {
  //     id: 2,
  //     imageUrl: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Product 2",
  //     stars: "⭐⭐⭐",
  //     price: 100,
  //     description :"Hi there"
  //   },
  //   {
  //     id: 3,
  //     imageUrl: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Product 3",
  //     stars: "⭐⭐⭐⭐⭐",
  //     price: 100,
  //     description :"Hi there"
  //   },
  //   {
  //     id: 4,
  //     imageUrl: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Product 4",
  //     stars: "⭐⭐⭐⭐",
  //     price: 100,
  //     description :"Hi there"
  //   },
  // ];

  return (
    <div className="lg:px-[100px] px-4 space-y-8">
      <h1 className="flex justify-center text-5xl font-bold">{name}</h1>
      <MultiCarousel products={products} loading={loading} />
    </div>
  );
}
