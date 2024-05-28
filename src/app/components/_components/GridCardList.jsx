import React from "react";
import GridCard from "./GridCard";

const CardData = [
  {
    title: "Vercel Blog Grid",
    desc: "Bento Grid Used By Vercel on Blog Section",
    img: "/vercel-grid.png",
    href: "/components/vercel-blog-grid",
    paid: false,
  },

  {
    title: "Solid Bento Grid",
    desc: "Bento Grid inspired by sprk.fi",
    img: "/solid-bento.png",
    href: "/components/solid-bento",
    paid: true,
  },
  {
    title: "Github CoPilot Grid",
    desc: "Bento Grid inspired by Github CoPilot",
    img: "/github-copilot.png",
    href: "/components/github-copilot-bento",
    paid: false,
  },
  {
    title: "Reveal Bento",
    desc: "Revel Bento made by @tomisloading",
    img: "/reveal-bento.png",
    href: "/components/reveal-bento",
    paid: false,
  },
   {
    title: "Branding Grid Template",
    desc: "A grid that can be used in branding",
    img: "/branding-template.png",
    href: "/components/branding-grid-template",
    paid: false,
  },
   {
    title: "Font Demo Grid",
    desc: "A grid that can be use for demo font preview",
    img: "/demo-grid-2.png",
    href: "/components/demo-grid-font",
    paid: false,
  },
  {
    title: "Fade In Grid",
    desc: "Bento Grid with fade in animation",
    img: "/animatedbento.png",
    href: "/components/fadein-bento-grid",
    paid: false,
  },
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
];
const GridCardList = () => {
  return (
    <div className="pb-32 px-12 lg:px-0">
      <h1 className="text-lightgradient mb-4 font-bold text-3xl">
        {" "}
        BentoTailwind Components{" "}
      </h1>
      <p className="text-sm mb-8  text-gray-400 lg:mr-40">
        Components are built with React, Tailwind CSS, and some combination of
        Framer Motion, vanilla JS animations, keyframes animations, or another
        popular, stable JavaScript animation library. We do our best to keep
        everything up to date with the latest version of each package, but let
        us know if you run into any problems.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
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
