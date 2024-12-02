"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from "./ProductCard";
import { Product } from "./ItemsTrayComponent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function MultiCarousel({
  products,
  loading,
}: {
  products: Product[];
  loading: boolean;
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return loading ? (
    <div className="flex flex-wrap h-80 w-full space-x-4 md:space-x-4">
  <div className="flex-1 h-80 w-full md:w-1/3">
    <Skeleton height="100%" width="100%" />
  </div>
  <div className="flex-1 h-80 w-full md:w-1/3 hidden md:block">
    <Skeleton height="100%" width="100%" />
  </div>
  <div className="flex-1 h-80 w-full md:w-1/3 hidden md:block">
    <Skeleton height="100%" width="100%" />
  </div>
</div>
  ) : (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={true} // Server-side rendering
      infinite={false}
      autoPlay={false} // Disable auto-swipe
      keyBoardControl={true}
      customTransition="transform 0.5s ease-in-out" // Smooth transition
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="px-4 transition-all duration-500 ease-in-out" // Smooth spacing adjustment
    >
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          className="h-64 w-full"
          imageUrl={product.imageUrl}
          name={product.name}
          stars={"⭐⭐⭐⭐"}
          description={product.description}
          price={product.price}
        />
      ))}
    </Carousel>
  );
}
