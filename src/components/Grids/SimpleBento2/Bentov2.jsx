import React from "react";

const Bentov2 = () => {
  return (
    <div className="grid h-96 gap-x-4 gap-y-0 grid-cols-3 grid-rows-3">
      <div className="col-span-2 bg-yellow-900 rounded-md  row-span-1"></div>
      <div className="col-span-1 bg-red-900 rounded-md  row-span-1">B</div>
      <div className="col-span-3 text-center items-center justify-center flex text-white row-span-1">
        <h1 className="text-6xl">BIG TEXT ABOUT YOUR WEBSITE</h1>
      </div>
      <div className="col-span-1 bg-blue-900 rounded-md  row-span-1">d</div>
      <div className="col-span-2 bg-purple-900 rounded-md  row-span-1">c</div>
    </div>
  );
};

export default Bentov2;

