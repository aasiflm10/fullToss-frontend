import { twMerge } from "tailwind-merge";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}


export function ProductCard({
  className,
  imageUrl,
  name,
  stars,
  description,
  price,
}: {
  className: string;
  imageUrl: string;
  name: string;
  stars: string;
  price: number;
  description : string;
}) {
  return (
    <div className="space-y-4">
      <img
        src={imageUrl}
        className={twMerge("object-cover rounded-md", className)}
      />
      <div className="">
        <h1 className="font-bold  text-xl">{name || <Skeleton />}</h1>
        <h1>{stars}</h1>
        <h1 className="font-bold">{price || <Skeleton/>}</h1>
      </div>
    </div>
  );
}
