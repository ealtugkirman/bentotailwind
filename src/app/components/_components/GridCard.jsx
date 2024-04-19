import React from "react";
import Image from "next/image";

const GridCard = ({ title, desc, image, href }) => {
  return (
    <div className="border-2 pb-6 flex flex-col text-white border-gray-500 rounded-2xl">
      <a href={href} >
        <div className="m-12">
          <Image width={500} height={500} src={image} alt={title} />
        </div>{" "}
        <h1 className="text-2xl text-lightgradient ml-8 font-bold">{title}</h1>
        <p className="text-base ml-8">{desc}</p>
      </a>
    </div>
  );
};

export default GridCard;
