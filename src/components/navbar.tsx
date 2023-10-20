"use client";
import Image from "next/image";
import React, { useState } from "react";

import menuClose from "images/icon-menu-close.svg";
import menu from "images/icon-menu.svg";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between h-20 lg:px-20">
      <div className="w-20 h-12 relative my-auto">
        <Image src={"images/logo.svg"} alt="logo" fill />
      </div>

      {/* {desktop} */}
      <ul className={`my-auto hidden md:flex`}>
        <li className="px-2 text-center">Home</li>
        <li className="px-2 text-center">New</li>
        <li className="px-2 text-center">Popular</li>
        <li className="px-2 text-center">Trending</li>
        <li className="px-2 text-center">Categories</li>
      </ul>
      {/* {mobile} */}
      <div className="my-auto md:hidden">
        <div className="p-3 transition-all">
          <div
            onClick={toggleMobileMenu}
            className={`w-8 h-7 relative ${isMobileMenuOpen ? "" : "hidden"}`}
          >
            <Image
              src={"images/icon-menu-close.svg"}
              alt="menu icon close"
              fill
            />
          </div>
          <div
            onClick={toggleMobileMenu}
            className={`w-8 h-7 relative ${isMobileMenuOpen ? "hidden" : ""}`}
          >
            <Image src={"images/icon-menu.svg"} alt="menu icon open" fill />
          </div>
        </div>

        <ul
          className={`bg-off-white rounded-md my-auto absolute left-[50%] transform -translate-x-[50%] flex flex-col transition-all ${isMobileMenuOpen ? "top-20" : "-top-32"}`}
        >
          <li className="px-2 text-center">Home</li>
          <li className="px-2 text-center">New</li>
          <li className="px-2 text-center">Popular</li>
          <li className="px-2 text-center">Trending</li>
          <li className="px-2 text-center">Categories</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
