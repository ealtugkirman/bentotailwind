import React from "react";
import { FaCrown, FaReact } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { HiMiniArrowsPointingOut } from "react-icons/hi2";


const HoverDevCards = () => {
  return (
    <div className="flex flex-col text-center pt-12 justify-center rounded-2xl bg-first">
      <div className="space-y-4">
        <h1 className="text-yellow-200 text-5xl font-semibold">
          It's pretty straight forward
        </h1>
        <p className="text-gray-300 pt-4 justify-center px-48 flex items-center">
          <span className="text-2xl"> Like a component? Just hit the </span>{" "}
          <button
            className="px-4 mx-2 flex w-24  items-center shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] font-bold justify-center py-2
               bg-yellow-200 text-first hover:text-white hover:bg-second">
            Code{" "}
            <span className="text-2xl ml-2">
              <IoCodeSlash />
            </span>
          </button>{" "}
          <span className="text-2xl"> toggle to get the source code.</span>{" "}
        </p>
      </div>
      <div className="px-32 pt-12">
        <div className="grid w-full  gap-8 grid-rows-2 grid-cols-3">
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
      className="w-full py-12 h-52 items-center justify-center p-4 rounded-lg  relative overflow-hidden group bg-firstlight">
      <div className="absolute inset-0 bg-yellow-200 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 top-0 -right-4 text-8xl text-slate-100 group-hover:text-black group-hover:rotate-12 transition-transform duration-300" />
      {/* <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-black transition-colors relative z-10 duration-300" /> */}
      <h3 className="text-start pt-8  text-xl font-bold text-gray-300 group-hover:text-black relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-start pt-4 text-sm text-gray-300 group-hover:text-black relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
