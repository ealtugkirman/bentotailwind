import React from "react";
import BentoExample from "../../public/Logo/FeaturesImage.png";
import Image from "next/image";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Modular",
    description:
      "Seamlessly integrate Bento Grids and TailwindCSS components into your projects with our intuitive interface. ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "MIT License",
    description: "You can use all components as commercal and personal",
    icon: LockClosedIcon,
  },
  {
    name: "Forever Free",
    description:
      "You can use, customize, copy and duplicate all free componenents. Forever. ",
    icon: ServerIcon,
  },
];

const Features = () => {
  return (
    <section className=" to-black ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase">
            30+ Bento Grid with TailwindCss
          </p>

          <h2 className="mt-6 capitalize text-2xl md:text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
            BentoTailwind Library helps you build beautiful websites
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-green-500 hover:rotate-12  w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-gray-200">
                  Simply Copy & Paste
                </h3>
                <p className="mt-1 md:mt-3 mx-4 md:text-base text-sm text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-blue-500 hover:rotate-12  w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-gray-200">
                  Easy to Customize
                </h3>
                <p className="mt-1 md:mt-3 mx-4 md:text-base text-sm text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-red-500 hover:rotate-12  w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-gray-200">
                  Made with TailwindCSS
                </h3>
                <p className="mt-1 md:mt-3 mx-4 md:text-base text-sm text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="w-full rounded-lg shadow-xl">
              <Image
                src={BentoExample}
                width="auto"
                height="auto"
                alt="Bento Grid UI Library Example"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
