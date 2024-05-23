"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo/2.png";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import DvaLogo from "../../../public/Logo/1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="md:bg-first z-40 sticky top-0 ">
      <div className="px-4 md:px-24">
        {/* <!-- lg+ --> */}
        <nav className="flex items-center justify-between md:justify-center md:h-24">
          <div className="flex-shrink-0 flex items-center flex-row">
            <a href="/" title="bentotailwind.com" className=" hidden md:flex">
              <Image
                className="w-auto md:h-12 lg:h-20"
                src={Logo}
                alt="BentoTailwind.com Logo"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex p-2 z-40 transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-second">
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

          <div className="hidden  text-gray-300 md:justify-center md:mx-auto  md:flex md:items-center md:space-x-10">
            <a
              href="/components"
              title=""
              className="text-md    transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Components{" "}
            </a>
            <a
              href="/blog"
              title=""
              className="text-md    transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Blog{" "}
            </a>
            <a
              href="/pricing"
              title=""
              className="text-md   transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Pricing{" "}
            </a>
            <a
              href="/privacypolicy"
              title=""
              className="text-md   transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Privacy Policy{" "}
            </a>
            <a
              href="/contact"
              title=""
              className="text-md   transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">
              {" "}
              Contact{" "}
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center justify-center">
            {/* <button className="px-6 py-2  bg-firstlight  w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"> */}
              <SignedOut className="px-6 py-2  bg-firstlight  w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]" >
                <SignInButton />
              </SignedOut>
            {/* </button> */}
              <SignedIn>
                <UserButton />
              </SignedIn>
            {/* <button className="px-6 py-2 font-bold bg-yellow-200 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Sign Up
            </button> */}
          </div>
        </nav>

        {/* <!-- xs to lg --> */}
        {isMobileMenuOpen && (
          <nav className="min-h-screen bg-black z-40 text-center  md:hidden">
            <nav className="flex flex-col items-center space-y-2">
              <a
                href="/components"
                title=""
                className="py-2     transition-all duration-200 focus:text-opacity-70">
                {" "}
                Components{" "}
              </a>

              <a
                href="/blog"
                title=""
                className="py-2     transition-all duration-200 focus:text-opacity-70">
                {" "}
                Blog{" "}
              </a>

              <a
                href="/pricing"
                title=""
                className="py-2     transition-all duration-200 focus:text-opacity-70">
                {" "}
                Pricing{" "}
              </a>

              <a
                href="/privacypolicy"
                title=""
                className="py-2     transition-all duration-200 focus:text-opacity-70">
                {" "}
                Privacy Policy{" "}
              </a>
              <a
                href="/contact"
                title=""
                className="py-10     transition-all duration-200 focus:text-opacity-70">
                {" "}
                Contact{" "}
              </a>
              <button>
                <div className="flex flex-row space-x-6 justify-center items-center ">
                  <button className="px-6 py-2  bg-firstlight  w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    Sign In
                  </button>
                </div>
              </button>

              <div>
                <div className="items-center flex-col py-12 justify-center mx-12 flex ">
                  <p>
                    BentoTailwind.com created, published and developed by
                    <a
                      className="cursor-pointer"
                      href="https://www.digitalvoyage.agency/">
                      {" "}
                      digitalvoyage.agency{" "}
                    </a>
                    for developers who love to use Bento Grids.
                  </p>{" "}
                  <a
                    className="cursor-pointer"
                    href="https://www.digitalvoyage.agency/">
                    <Image
                      width={200}
                      height={200}
                      alt="digitalvoyage.agency Logo"
                      src={DvaLogo}
                    />
                  </a>
                </div>
              </div>
            </nav>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
