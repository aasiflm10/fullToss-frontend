"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReviewCard } from "./ReviewCard";

// Replace ProductCard with ReviewCard to display reviews
interface Review {
  id: number;
  reviewerName: string;
  rating: number; // Assuming the rating is a number out of 5
  reviewText: string;
  avatarSrc: string;
}

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
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
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          className="h-64 w-full"
          reviewerName={review.reviewerName}
          rating={review.rating}
          reviewText={review.reviewText}
        />
      ))}
    </Carousel>
  );
}
