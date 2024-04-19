import React from "react";
import GridCard from "./GridCard";

const CardData = [
  {
    title: "Simplec Bento Grid",
    desc: "lorem",
    img: "/laptop.png",
    href: "/components/simple-bento",
  },
  {
    title: "Simplec Bento Grid",
    desc: "lorem",
    img: "/laptop.png",
    href: "/components/simple-bento",
    // Assuming "first" is the path to your image
  },
  {
    title: "Simplec Bento Grid",
    desc: "lorem",
    img: "/laptop.png",
    href: "/components/simple-bento",
    // Assuming "first" is the path to your image
  },
  // Add more data objects here if needed
];

const GridCardList = () => {
  return (
    <div className="">
      <h1 className="text-lightgradient mb-4 font-bold text-3xl">
        {" "}
        BentoTailwind Components{" "}
      </h1>
      <p className="text-sm mb-8  text-gray-400 mr-40">
        Components are built with React, Tailwind CSS, and some combination of
        Framer Motion, vanilla JS animations, keyframes animations, or another
        popular, stable JavaScript animation library. We do our best to keep
        everything up to date with the latest version of each package, but let
        us know if you run into any problems.
      </p>
      <div className="grid grid-cols-2 gap-12">
        {CardData.map((item, index) => (
          <GridCard
            key={index}
            title={item.title}
            desc={item.desc}
            image={item.img}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCardList;
