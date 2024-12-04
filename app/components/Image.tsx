"use client"
import { twMerge } from "tailwind-merge";
import React, { useState, useEffect } from "react";
import Image from 'next/image'
 

export function ImageComponent({ className, src }: { className: string; src: string }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Reset loading state whenever src changes
    console.log(src);
  }, [src]);


  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        width={500}
        height={500}
        className={twMerge(
          className,
          "object-cover w-full",
          loading ? "opacity-0" : "opacity-100"
        )}
        src={
          src
            ? src
            : "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        onLoad={() => setLoading(false)} // Hide loader after image loads
      />
    </div>
  );
}
