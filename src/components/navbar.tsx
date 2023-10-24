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
        <li className="px-2 text-center cursor-pointer hover:text-soft-orange hover:font-semibold transition-all">
          Home
        </li>
        <li className="px-2 text-center cursor-pointer hover:text-soft-orange hover:font-semibold transition-all">
          New
        </li>
        <li className="px-2 text-center cursor-pointer hover:text-soft-orange hover:font-semibold transition-all">
          Popular
        </li>
        <li className="px-2 text-center cursor-pointer hover:text-soft-orange hover:font-semibold transition-all">
          Trending
        </li>
        <li className="px-2 text-center cursor-pointer hover:text-soft-orange hover:font-semibold transition-all">
          Categories
        </li>
      </ul>
      {/* {mobile} */}
      <div className="my-auto md:hidden overflow-hidden">
        <div className="p-3 transition-all">
          <div
            onClick={toggleMobileMenu}
            className={`z-20 w-8 h-7 relative ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
          >
            <Image
              src={"images/icon-menu-close.svg"}
              alt="menu icon close"
              fill
            />
          </div>
          <div
            onClick={toggleMobileMenu}
            className={`z-20 w-8 h-7 relative ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            <Image src={"images/icon-menu.svg"} alt="menu icon open" fill />
          </div>
        </div>

        <div
          className={`
            left-0
            top-0
            h-full w-full
            absolute 
            bg-black
            opacity-40
            z-10
            transition-all ${isMobileMenuOpen ? "block" : "hidden"}`}
        ></div>
        <div
          className={`
          w-2/3
          h-full
          bg-off-white
          z-10
          flex flex-col 
          absolute  
          top-0
          transition-all ${isMobileMenuOpen ? "right-0" : "-right-96"}
          
          `}
        >
          <ul
            className="
          pt-[150px]
          "
          >
            <li className="p-3 text-xl">Home</li>
            <li className="p-3 text-xl">New</li>
            <li className="p-3 text-xl">Popular</li>
            <li className="p-3 text-xl">Trending</li>
            <li className="p-3 text-xl">Categories</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
