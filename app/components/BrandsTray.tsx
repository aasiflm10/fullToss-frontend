import { Adidas } from "./icons/Adidas";
import { Gucci } from "./icons/Gucci";
import { HM } from "./icons/HM";
import { Louis } from "./icons/Louis";
import { NewBalance } from "./icons/NewBalance";
import { Nike } from "./icons/Nike";

export function BrandsTray() {
  return (
    <div className="p-4 lg:px-[100px] px-4 w-full bg-black flex flex-wrap justify-between">
      <Adidas />
      <Gucci />
      <Nike />
      <NewBalance />
      <HM />
      <Louis />
    </div>
  );
}
