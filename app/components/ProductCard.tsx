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
    <div className="space-y-4">
      <img
        src={src}
        className={twMerge("object-cover rounded-md", className)}
      />
      <div className="">
        <h1 className="font-bold  text-xl">{productName}</h1>
        <h1>{stars}</h1>
        <h1 className="font-bold">{price}</h1>
      </div>
    </div>
  );
}
