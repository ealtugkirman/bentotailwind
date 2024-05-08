import React from "react";

const page = () => {
  return (
    <div className="grid gap-1 pt-12 px-24 lg:grid-cols-4 grid-rows-4">
      <div className="lg:col-span-3 bg-red-800 h-40 lg:row-span-1">a</div>
      <div className="lg:col-span-1 bg-red-800 lg:row-span-2">b</div>
      <div className="lg:col-span-1 bg-red-800 h-40 lg:row-span-1">c</div>
      <div className="lg:col-span-1 bg-red-800 h-40 lg:row-span-1">d</div>
      <div className="lg:col-span-1 bg-red-800 h-40 lg:row-span-1">e</div>
      <div className="lg:col-span-2 bg-red-800 h-40 lg:row-span-2">f</div>
      <div className="lg:col-span-2 bg-red-800 h-40 lg:row-span-2">g</div>
    </div>
  );
};

export default page;
