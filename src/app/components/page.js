import React from "react";
import Sidebar from "./SideBar";
import SimpleBento from "@/components/Grids/SimpleBento1/SimpleBento";
import SimpleBento2 from "@/components/Grids/SimpleBento2/SimpleBento2";

const page = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex bg-first">
        <div className="w-80 h-full flex "></div>
        <div className="flex flex-col px-32 bg-first text-first w-screen" >
          <SimpleBento />
          <SimpleBento2 />
        </div>
      </div>
    </div>
  );
};

export default page;
