import React from "react";
import { FaCrown, FaReact } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { HiMiniArrowsPointingOut } from "react-icons/hi2";


const HoverDevCards = () => {
  return (
    <div className="flex flex-col text-center pb-16 md:pb-0 justify-center rounded-2xl ">
      <div className="space-y-4">
        <h1 className="text-yellow-200 text-2xl font-semibold">
          It's pretty straight forward
        </h1>
        <p className="text-gray-300 md:pt-4 text-sm md:text-2xl justify-center px-12 md:px-48 flex md:flex-row flex-col items-center space-y-1">
          <span className=""> Like a component? Just hit the </span>{" "}
          <button
            className="px-4 mx-2 flex w-24  items-center shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] font-bold justify-center py-2
               bg-yellow-200 text-first hover:text-white hover:bg-second">
            Code{" "}
            <span className=" ml-2">
              <IoCodeSlash />
            </span>
          </button>{" "}
          <span className=""> toggle to get the source code.</span>{" "}
        </p>
      </div>
      <div className="md:px-32 px-20  pt-12">
        <div className="grid w-full gap-4 md:gap-8 grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-3">
          <Card
            title="Customizable"
            subtitle="Copy and paste into your apps and experience the power of customizable components."
            href="#"
            Icon={BiSolidCustomize}
          />
          <Card
            title="Fully Responsive"
            subtitle="Responsive designed components and templates that look great on any screen."
            href="#"
            Icon={HiMiniArrowsPointingOut}
          />
          <Card
            title="Modern tech"
            subtitle="All components are built with React and styled with Tailwind CSS."
            href="#"
            Icon={FaReact}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full py-4 md:py-12 h-28  md:h-52 items-center justify-center p-4 rounded-lg  relative overflow-hidden group bg-firstlight">
      <div className="absolute inset-0 bg-yellow-200 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 top-1 md:top-0 right-1 md:-right-4 text-6xl md:text-8xl text-slate-100 group-hover:text-black group-hover:rotate-12 transition-transform duration-300" />
      {/* <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-black transition-colors relative z-10 duration-300" /> */}
      <h3 className="text-start pt-4 md:pt-8  md:text-lg md:text-xl font-bold text-gray-300 group-hover:text-black relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-start pt-3 md:pt-4 text-xs md:text-sm text-gray-300 group-hover:text-black relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
