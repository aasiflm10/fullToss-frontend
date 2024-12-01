"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  src: string;
  productName: string;
  stars: string;
  price: string;
}

export function MultiCarousel({ products }: { products: Product[] }) {
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

  return (
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
      {products.map((product) => (
        <ProductCard
          key={product.id}
          className="h-64 w-full"
          src={product.src}
          productName={product.productName}
          stars={product.stars}
          price={product.price}
        />
      ))}
    </Carousel>
  );
}
