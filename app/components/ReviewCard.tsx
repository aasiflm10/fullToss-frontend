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
        <h1 className="font-semibold text-lg">{reviewerName}</h1>
        <p className="text-base">{reviewText}</p>
      </div>
    </div>
  );
}
