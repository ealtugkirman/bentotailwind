import React from "react";
import WireFrame from "../../public/bentoexample.jpg";
import Image from "next/image";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Modular",
    description:
      "Seamlessly integrate Bento Grids and TailwindCSS components into your projects with our intuitive interface. ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "MIT License",
    description:
      "You can use all components as commercal and personal",
    icon: LockClosedIcon,
  },
  {
    name: "Forever Free",
    description:
      "You can use, customize, copy and duplicate all free componenents. Forever. ",
    icon: ServerIcon,
  },
];

const Allah = () => {
  return (
    <div className="overflow-hidden bg-first pb-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-semibold leading-7 text-yellow-200">
                Bento Grids
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-yellow-200 sm:text-4xl">
                never will be the same{" "}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                You can use dozens of stylish bento grid with just one click
                with tailwind. You don't need to worry about creating bento
                grids and make them stylish.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-yellow-200">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-yellow-200"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={WireFrame}
            alt="BentoTailwind.css"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

export default Allah;
