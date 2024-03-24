"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo/1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-first z-40 sticky top-0 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" title="" className="flex">
              <Image className="w-auto h-8 lg:h-12" src={Logo} alt="" />
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-second">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-10">
            <a
              href="/components"
              title=""
              className="text-lg font-medium  text-white transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Components{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-lg font-medium  text-white transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Solutions{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-lg font-medium  text-white transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Resources{" "}
            </a>

            <a
              href="/pricing"
              title=""
              className="text-lg font-medium text-white transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Pricing{" "}
            </a>
          </div>
          <div className="min-h-[200px] hidden md:flex space-x-4 items-center justify-center">
            <button className="px-6 py-2 font-medium bg-second text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Sign In
            </button>
            <button className="px-6 py-2 font-medium bg-green-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Sign Up
            </button>
          </div>
        </nav>

        {/* <!-- xs to lg --> */}
        {isMobileMenuOpen && (
          <nav className="min-h-screen px-4 py-10 text-center bg-first md:hidden">
            <nav className="flex flex-col items-center mt-10 space-y-2">
              <a
                href="#"
                title=""
                className="py-2  font-medium  text-white transition-all duration-200 focus:text-opacity-70">
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2  font-medium  text-white transition-all duration-200 focus:text-opacity-70">
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2  font-medium  text-white transition-all duration-200 focus:text-opacity-70">
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2  font-medium  text-white transition-all duration-200 focus:text-opacity-70">
                {" "}
                Pricing{" "}
              </a>
            </nav>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
