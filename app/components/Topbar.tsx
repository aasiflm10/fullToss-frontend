"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";
export function TopBar({ name }: { name: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between px-5 pt-5 text-xl md:py-5">
      <div className="p-2 font-bold">Shop.io</div>
      <div className="hidden space-x-4 md:flex">
        <Link href={"/"} className="p-2 text-tBase">
          Hi, {name}
        </Link>
        <Link href="/" className="p-2 text-tBase">
          Theme
        </Link>
        <Link href={"/about"} className="p-2 text-tBase">
          About
        </Link>
        <Link href={"/cart"} className="p-2 text-tBase">
          Cart
        </Link>
        <div className="flex space-x-2 py-3">
          <NightlightRoundIcon />
          <LightModeIcon />
        </div>
      </div>
      <div className="md:hidden">
        <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Side menu for mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-900 bg-opacity-75">
          <div className="h-full w-64 bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-tBase">{name}</h2>
              <CloseIcon
                onClick={toggleMenu}
                className="cursor-pointer text-gray-700"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <Link href={"/"} className="text-left text-tBase">
                Hi, {name}
              </Link>
              <Link href={"/"} className="text-left text-tBase">
                Theme
              </Link>
              <Link href={"/about"} className="text-left text-tBase">
                About
              </Link>
              <Link href={"/cart"} className="text-left text-tBase">
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
