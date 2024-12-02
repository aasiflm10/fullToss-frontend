import { twMerge } from "tailwind-merge";

export function ReviewCard({
  reviewerName,
  rating,
  reviewText,
  className,
}: {
  reviewerName: string;
  rating: number;
  className: string;
  reviewText: string;
}) {
  return (
    <div className={twMerge("py-[28px] px-8", className)}>
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg">{reviewerName}</h1>
          <h1 className="font-semibold text-lg">{rating}</h1>
        </div>
        <p className="text-base">{reviewText}</p>
      </div>
    </div>
  );
}
