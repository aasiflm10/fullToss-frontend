export function HeadingAndSubText({
  firstHeading,
  subtext,
}: {
  firstHeading: string;
  subtext: string;
}) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{firstHeading}</h1>
      <h1 className="text-base font-semibold text-gray-400">{subtext}</h1>
    </div>
  );
}
