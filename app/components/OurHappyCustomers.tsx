import { ReviewCarousel } from "./ReviewsCarousel";

export function OurHappyCustomers() {
  const reviews = [
    {
      id: 1,
      reviewerName: "John Doe",
      rating: 4,
      reviewText: "Great product! Would recommend it to my friends.",
      avatarSrc: "https://www.example.com/avatar1.jpg",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      rating: 5,
      reviewText: "Amazing quality! Exceeded my expectations.",
      avatarSrc: "https://www.example.com/avatar2.jpg",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      rating: 5,
      reviewText: "Amazing quality! Exceeded my expectations.",
      avatarSrc: "https://www.example.com/avatar2.jpg",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      rating: 5,
      reviewText: "Amazing quality! Exceeded my expectations.",
      avatarSrc: "https://www.example.com/avatar2.jpg",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      rating: 5,
      reviewText: "Amazing quality! Exceeded my expectations.",
      avatarSrc: "https://www.example.com/avatar2.jpg",
    },
  ];

  return (
    <div className="space-y-8 lg:px-[100px] px-4 mt-20">
      <h1 className=" flex justify-center font-bold text-5xl text-tBase">OUR HAPPY CUSTOMERS</h1>
      <ReviewCarousel reviews={reviews} />
    </div>
  );
}
