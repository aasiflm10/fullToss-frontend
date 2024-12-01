import { ProductCard } from "./ProductCard";

export function TopSelling() {
  return (
    <div>
      <h1>Top Selling</h1>
      <div className="flex">
        <ProductCard
          src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="T-shirt"
          stars="4"
          price="$120"
          className=""
        />
        <ProductCard
          src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="T-shirt"
          stars="4"
          price="$120"
          className=""
        />
        <ProductCard
          src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="T-shirt"
          stars="4"
          price="$120"
          className=""
        />
        <ProductCard
          src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="T-shirt"
          stars="4"
          price="$120"
          className=""
        />
      </div>
    </div>
  );
}
