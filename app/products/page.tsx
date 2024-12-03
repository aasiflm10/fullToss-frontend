"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { TopBar } from "../components/Topbar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: string;
}
interface CartItem {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  product: Product;
}

interface ProductsResponse {
  message: string;
  products: Product[];
}

interface CartResponse {
  message: string;
  cartItem: CartItem;
}

const ISSERVER = typeof window === "undefined";

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let token: string = "";
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (!ISSERVER) {
      token = localStorage.getItem("token") || "";
      const th = localStorage.getItem("team") || "";
      setTheme(th);
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductsResponse>(
          `${BACKEND_URL}/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data.products);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: number) => {
    try {
      const response = await axios.post<CartResponse>(
        `${BACKEND_URL}/cart`,
        { productId, quantity: 1 }, // Assuming a default quantity of 1
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Use the token if authentication is required
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        alert(response.data.message);
      } else {
        alert("Unexpected response from the server.");
      }
    } catch (error) {
      alert("Failed to add to cart.");
      console.log(error);
    }
  };

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
      <div className="text-center">
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

  return (
    <div className={`theme-${theme}`}>
      <TopBar
        name="Aasif"
        onThemeChange={(theme) => {
          setTheme(theme);
        }}
      />
      <h1 className="text-3xl font-bold mb-8 text-center text-tBase">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-tBase">
              {product.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
