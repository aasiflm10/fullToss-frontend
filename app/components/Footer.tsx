import { C } from "./icons/C";

export function Footer() {
  return (
    <div className="flex flex-col justify-center space-x-4 md:flex-row md:px-14 md:py-[30px]">
      <div className="flex justify-center space-x-1 mt-1">
        <div className="mt-[3px]">
          <C />
        </div>
        <p>2023</p>
      </div>
      <button className="text-xl">Twitter</button>
      <button className="text-xl">LinkedIn</button>
      <button className="text-xl">Email</button>
      <button className="text-xl">feed</button>
      <button className="text-xl">Add to Feedly</button>
    </div>
  );
}
