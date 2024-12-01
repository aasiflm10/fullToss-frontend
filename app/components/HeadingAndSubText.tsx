export function HeadingAndSubText({
  firstHeading,
  subtext,
}: {
  firstHeading: string;
  subtext: string;
}) {
  return (
    <div>
      <h1>{firstHeading}</h1>
      <h1>{subtext}</h1>
    </div>
  );
}
