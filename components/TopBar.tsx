"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TopBar = ({ name, image }: { name: string; image?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <div className="text-gray-700 mr-4">
        Selamat Datang, {name.toUpperCase()}
      </div>
      <div className="flex items-center">
        <div
          onClick={toggleMenu}
          className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm overflow-hidden cursor-pointer"
        >
          <Image
            src={image || "/default-profile.png"}
            alt="User profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10">
            <Link href={"/"}>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Log Out
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
