"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";

const teams = [
  "CSK",
  "MI",
  "RCB",
  "KKR",
  "SRH",
  "DC",
  "PBKS",
  "RR",
  "GT",
  "LSG",
]; // Add team names here

export function TopBar({
  name,
  onThemeChange,
}: {
  name: string;
  onThemeChange: (theme: string) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(teams[0]); // Default theme
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For theme dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    onThemeChange(theme);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex justify-between px-5 pt-5 text-xl md:py-5 relative">
      <div className="p-2 font-bold">Shop.io</div>
      <div className="hidden md:flex items-center space-x-4">
        <Link href={"/"} className="p-2 text-tBase">
          Hi, {name}
        </Link>
        <div className="relative">
          {/* Dropdown Button */}
          <div
            className="p-2 cursor-pointer text-tBase"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            Theme: {selectedTheme}
          </div>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-md z-10">
              {teams.map((team) => (
                <div
                  key={team}
                  onClick={() => handleThemeChange(team)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {team}
                </div>
              ))}
            </div>
          )}
        </div>
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
              <div className="relative">
                <div
                  className="p-2 text-left text-tBase cursor-pointer"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  Theme: {selectedTheme}
                </div>
                {isDropdownOpen && (
                  <div className="mt-2 flex flex-col space-y-2">
                    {teams.map((team) => (
                      <div
                        key={team}
                        onClick={() => handleThemeChange(team)}
                        className="p-2 cursor-pointer hover:bg-gray-100"
                      >
                        {team}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
