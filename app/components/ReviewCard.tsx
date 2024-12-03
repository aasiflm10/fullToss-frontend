import { twMerge } from "tailwind-merge";

export function ReviewCard({
  reviewerName,
  rating,
  reviewText,
  className,
}: {
  reviewerName: string;
  rating: number; // Rating between 1 and 5
  className: string;
  reviewText: string;
}) {
  return (
    <div className={twMerge("py-[28px] px-8", className)}>
      <div>
        <div className="items-center">
          <h1 className="font-semibold text-lg text-tBase">{reviewerName}</h1>
          {/* Render stars based on the rating */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={index < rating ? "gold" : "gray"}
                className="w-5 h-5"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-base mt-2">{reviewText}</p>
      </div>
    </div>
  );
}
