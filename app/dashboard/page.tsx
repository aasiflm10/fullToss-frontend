"use client";
import { TopBar } from "../components/Topbar";
import { Button } from "../components/Button";
import { HeadingAndSubText } from "../components/HeadingAndSubText";
import { ImageComponent } from "../components/Image";
import { ItemsTrayComponent, Product } from "../components/ItemsTrayComponent";
import { Footer } from "../components/Footer";
import { BrandsTray } from "../components/BrandsTray";
import { OurHappyCustomers } from "../components/OurHappyCustomers";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";

interface ProductsResponse {
  message: string;
  products: Product[];
}


const ISSERVER = typeof window === "undefined";

export default function Home() {
  let team = "";
  if (!ISSERVER) {
    team = localStorage.getItem("team") || "";
  }
  const [theme, setTheme] = useState<string>(team as string);

  // const products: Product[] = [];
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  async function getProducts() {
    let token: string = "";
    if (!ISSERVER) {
      token = localStorage.getItem("token") || "";
    }
    try {
      const res = await axios.get<ProductsResponse>(`${BACKEND_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API Response:", res.data);

      // Update state

      setProducts(res.data.products);
      setLoading(false);
    } catch (e) {
      console.error("Error fetching products:", e);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log("Updated Products:", products);
  }, [products]);

  return (
    <div className={`theme-${theme}`}>
      <div>
        <TopBar
          name="Aasif"
          onThemeChange={(theme) => {
            setTheme(theme); // Apply theme to the body
          }}
        />
      </div>


      <div className={`grid grid-cols-12 bg-gray-200 p-4 lg:px-[100px] px-4`}>
        <div className="lg:col-span-6 col-span-12 space-y-8">
          <h1 className="text-6xl text-tBase">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <h1 className="text-base ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged
          </h1>
          <Button
            buttonText="Buy Now"
            className="py-4 bg-secondary rounded-2xl w-full md:w-[210px] text-base"
          />
          <div className="flex md:space-x-16 space-x-8">
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
          <ImageComponent
            src={"https://i.ibb.co/7Y09R86/kolkata-knight-riders-seeklogo.png"}
            className="h-[500px]"
          />
        </div>
      </div>
      <BrandsTray />
      <div className="mt-16 space-y-8">
        <ItemsTrayComponent
          name="New Arrivals"
          products={products}
          loading={loading}
        />
        <ItemsTrayComponent
          name="Top Selling"
          products={products}
          loading={loading}
        />
      </div>
      <OurHappyCustomers />
      <Footer />
    </div>
  );
}
