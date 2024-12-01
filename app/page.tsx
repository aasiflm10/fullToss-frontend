import { TopBar } from "./components/Topbar";
import { Button } from "./components/Button";
import { HeadingAndSubText } from "./components/HeadingAndSubText";
import { Image } from "./components/Image";
import { ItemsTrayComponent, Product } from "./components/ItemsTrayComponent";
import { TopSelling } from "./components/TopSelling";
import { Footer } from "./components/Footer";

export default function Home() {
  const products: Product[] = [];
  return (
    <div className="lg:px-[100px] px-4">
      <div>
        <TopBar name="Shop.io" />
      </div>

      <div className="grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12">
          <h1>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </h1>
          <Button buttonText="Buy Now" className="" />
          <div className="flex">
            <HeadingAndSubText
              firstHeading="200+"
              subtext="Internation Brands"
            />
            <HeadingAndSubText
              firstHeading="200+"
              subtext="Internation Brands"
            />
            <HeadingAndSubText
              firstHeading="200+"
              subtext="Internation Brands"
            />
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12">
          <Image src={""} className="" />
        </div>
      </div>
      <ItemsTrayComponent name="New Arrivals" list={products} />
      <ItemsTrayComponent name="Top Selling" list={products} />
      <Footer />
    </div>
  );
}
