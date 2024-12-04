import Link from "next/link";
import { C } from "./icons/C";

export function Footer() {
  return (
    <div className="flex flex-col justify-center space-x-4 md:flex-row md:px-14 md:py-[30px]">
      <div className="flex justify-center space-x-1 mt-1">
        <div className="mt-[3px]">
          <C />
        </div>
        <p>2024</p>
      </div>
      <Link href={"https://www.linkedin.com/in/aasif-ali-a58638229/"} className="text-xl">LinkedIn</Link>
      <Link href={"https://x.com/Aasif_1007"} className="text-xl">Twitter</Link>
      <Link href={"mailto:aa6125405@gmail.com"} className="text-xl">Email</Link>
    </div>
  );
}
