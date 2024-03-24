import React from "react";
import Sidebar from "./SideBar";
import SimpleBento from "@/components/SimpleBento/SimpleBento";
import SimpleBentoTwo from "@/components/SimpleBentoTwo/SimpleBentoTwo";

const page = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex">
        <div className="w-80 h-full flex "></div>
        <div className="flex flex-col px-32 bg-white text-first w-screen" >
          <SimpleBento />
          <SimpleBentoTwo />
        </div>
      </div>
    </div>
  );
};

export default page;
