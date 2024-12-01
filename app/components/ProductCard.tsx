import { twMerge } from "tailwind-merge";

export function ProductCard({
  className,
  src,
  productName,
  stars,
  price,
}: {
  className: string;
  src: string;
  productName: string;
  stars: string;
  price: string;
}) {
  return (
    <div>
      <img src={src} className={twMerge("object-cover", className)} />
      <h1>{productName}</h1>
      <h1>{stars}</h1>
      <h1>{price}</h1>
    </div>
  );
}
