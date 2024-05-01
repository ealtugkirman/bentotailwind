import React from "react";
import GridCard from "./GridCard";

const CardData = [
  {
    title: "Simple Bento Grid",
    desc: "Basic grid for you to costumize as you like",
    img: "/simple_bento_grid.png",
    href: "/components/simple-bento",
    paid: false,
  },
  {
    title: "Simple Bento Grid With Text",
    desc: "Basic grid for you to costumize as you like (but it has a text).",
    img: "/simple_bento_grid_text.png",
    href: "/components/simple-bento",
    paid: false,
  },
    {
    title: "Tailwind Responsive Grid",
    desc: "Basic Responsive Grid.",
    img: "/responsive-grid.png",
    href: "/components/tailwind-responsive-grid",
    paid: false,
  },
     {
    title: "Reveal Bento",
    desc: "Revel Bento made by @tomisloading",
    img: "/reveal-bento.png",
    href: "/components/reveal-bento",
    paid: false,
  },
];
const GridCardList = () => {
  return (
    <div className="pb-32">
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
            paid={item.paid} // Pass the paid prop here
          />
        ))}
      </div>
    </div>
  );
};

export default GridCardList;
