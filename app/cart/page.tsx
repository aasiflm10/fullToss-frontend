"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { TopBar } from "../components/Topbar";
import { Footer } from "../components/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface CartItem {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  product: Product;
}

interface CartResponse {
  message: string;
  cartItems: CartItem[];
}

const ISSERVER = typeof window === "undefined";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  let token: string = "";
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (!ISSERVER) {
      token = localStorage.getItem("token") || "";
      const th = localStorage.getItem("team") || "";
      setTheme(th);
    }
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get<CartResponse>(`${BACKEND_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token for authentication if required
        },
      });
      setCartItems(response.data.cartItems || []);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch cart items.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <TopBar
          name="Aasif"
          onThemeChange={(theme) => {
            setTheme(theme);
          }}
        />
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center   ">
        <TopBar
          name="Aasif"
          onThemeChange={(theme) => {
            setTheme(theme);
          }}
        />
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className={`theme-${theme}`}>
      <TopBar
        name="Aasif"
        onThemeChange={(theme) => {
          setTheme(theme);
        }}
      />
      <h1 className="text-3xl font-bold mb-8 text-center text-tBase ">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-tBase">
              {item.product.name}
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              {item.product.description}
            </p>
            <p className="text-lg font-bold mb-2">
              ${item.product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-4">Quantity: {item.quantity}</p>
            <p className="font-semibold">
              Total: ${(item.product.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
