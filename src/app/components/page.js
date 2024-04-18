import React from "react";
import Sidebar from "./_components/SideBar";
import SimpleBento from "../../components/Grids/SimpleBento1/SimpleBento";
import SimpleBento2 from "../../components/Grids/SimpleBento2/SimpleBento2";

const page = () => {
  return (
    <div className="flex flex-row">
      <div className="hidden lg:block lg:w-1/4 w-1/5" >
        <Sidebar />
      </div>
      <div className="hidden lg:block lg:3/4 w-4/5 bg-first">
        <div className="flex flex-col px-24 bg-first text-first">
          <SimpleBento />
          <SimpleBento2 />
        </div>
      </div>
    </div>
  );
};

export default page;
