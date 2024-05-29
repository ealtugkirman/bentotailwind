import React from "react";
import { FaArrowDown } from "react-icons/fa";

const page = () => {
  return (
    <div className="grid grid-rows-7 grid-cols-4  xl:gap-4 lg:gap-3 md:gap-2 gap-1 bg-slate-900 rounded-xl xl:mx-36 lg:mx-32 md:mx-32  xl:p-12 lg:p-8 md:p-4 p-2">
      <div className="col-span-3 bg-orange-500 rounded-full"></div>
      <div className="col-span-1 flex text-6xl border-orange-500 text-orange-500 rounded-full border-2 items-center justify-center ">
        <FaArrowDown />
      </div>
      <div className="col-span-2 rounded-full  border-2 border-purple-500 text-4xl text-purple-500 flex items-center justify-center">
        explore
      </div>
      <div className="col-span-2 rounded-full bg-purple-500 text-white flex text-4xl items-center justify-center ">
        landings
      </div>
      <div className="col-span-1 rounded-full bg-yellow-600 "></div>
      <div className="col-span-3 rounded-full border-2 border-gray-400 "></div>
      <div className="col-span-2 rounded-full flex items-center justify-center text-4xl text-white bg-teal-500 ">
        web mags
      </div>
      <div className="col-span-1 rounded-full items-center border-2 border-blue-900 text-blue-900 justify-center flex  text-6xl ">
        {" "}
        <FaArrowDown className="flex -rotate-45" />
      </div>
      <div className="col-span-1 rounded-full bg-gray-400 "></div>
      <div className="col-span-1 flex text-6xl border-gray-500 text-gray-500 rounded-full border-2 items-center justify-center ">
        <FaArrowDown />
      </div>
      <div className="col-span-3 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center text-4xl">
        digital editorials
      </div>
      <div className="col-span-2 rounded-full  bg-blue-500 flex items-center justify-center  ">
        <svg
          className="text-white w-3/5"
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 243.58"
          fill="white" // Bu satırı ekledim
        >
          <path
            fill-rule="nonzero"
            d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"
          />
        </svg>
      </div>
      <div className="col-span-2  text-4xl bg-blue-500 text-white rounded-full flex items-center justify-center">
        voyage
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-4">
        <div className="col-span-1 border-2 border-green-600 rounded-full"></div>
        <div className="col-span-1 border-blue-500 border-2 rounded-full"></div>
      </div>
      <div className="cols-span-1 rounded-full bg-orange-500"></div>
    </div>
  );
};

export default page;
