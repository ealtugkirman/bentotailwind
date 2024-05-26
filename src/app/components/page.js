import React from "react";
import Sidebar from "./_components/SideBar";
import GridCardList from "./_components/GridCardList"

const page = () => {
  return (
    <div className="flex bg-first pt-24 flex-row">
      <div className="hidden lg:block lg:w-1/4 w-1/5" >
        <Sidebar />
      </div>
      <div className="block lg:3/4 bg-first">
        <div className="flex flex-col lg:px-24 bg-first text-first">
          <GridCardList />
        </div>
      </div>
    </div>
  );
};

export default page;

