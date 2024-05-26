"use client";
import React from "react";
import Sidebar from "../_components/SideBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";
import Pyramid from "./pyramid.svg";
import StaticImage from "./static.svg";
import MiddleBg from "./middle-bg.png";
import Coin from "./coin.svg";
import Square from "./square.svg";
import Image from "next/image";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "react-toastify/dist/ReactToastify.css";

const CodePreview = ({ component: Component, code }) => {
  return (
    <div className="w-full">
      <div className="h-full bg-first">
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const SolidBento = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4  text-center font-thin grid-rows-3 bg-solid p-8 gap-0">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300/60 to-purple-400/60 flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        ONCHAIN COMPOSABILITY
      </div>
      <div className="flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        CROSS / ISOLATED MARGIN
      </div>
      <div className="relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <h1 className="absolute text-left bottom-4 left-4">
          JUST IN TIME <br /> LIQUIDITY
        </h1>
        <div className="absolute  right-0 top-1">
          <Image src={Pyramid} width={220} height={220} />
        </div>
      </div>
      <div className="relative col-span-1 row-span-1 border border-white border-opacity-50 h-52">
        <div className="">
          <Image className="animate-spin-slow duration-1000" src={StaticImage} />
        </div>
      </div>
      <div className="hidden lg:block relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <div className="absolute text-start bottom-4 left-4">
          <h1 className="text-sm font-thin">LEVERAGE</h1>
          <p className="text-7xl">20X</p>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={MiddleBg} width={220} height={220} />
        </div>
      </div>
      <div className="flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        PYTH PRICE <br />
        ORACLE{" "}
      </div>
      <div className="block lg:hidden relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <div className="absolute text-start bottom-4 left-4">
          <h1 className="text-sm font-thin">LEVERAGE</h1>
          <p className="text-7xl">20X</p>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={MiddleBg} width={220} height={220} />
        </div>
      </div>
      <div className="relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <div className="absolute text-start bottom-4 left-4">
          <h1 className="text-sm font-thin">COLLETRAL</h1>
          <p className="text-8xl">USDC</p>
        </div>
        <div className="absolute animate-spin-slow top-2 right-2">
          <Image src={Coin} width={100} height={100} />
        </div>
      </div>
      <div className="flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        PRICE BASED <br />
        ORDERS{" "}
      </div>
      <div className="col-span-1 border-0 row-span-1  border-white border-opacity-50 h-52">
        <div className="animate-spin-slow" >
          <Image src={Square} />
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const Copied = () => {
    toast.success("Copied");
  };

  const instalationCode = `
Define a custom animation in your tailwind.config.js file:

module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}
After adding this configuration, you can use the new animate-spin-slow class in your component:

<div className="absolute animate-spin-slow">
  <Image src={StaticImage} />
</div>
This custom animation class will make the spin slower by setting the duration of the spin to 3 seconds. Make sure to restart your development server after making changes to the tailwind.config.js file.
  `;

  const componentCode = `
import Pyramid from "./pyramid.svg";
import StaticImage from "./static.svg";
import MiddleBg from "./middle-bg.png";
import Coin from "./coin.svg";
import Square from "./square.svg";
import Image from "next/image";

const SolidBento = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4  text-center font-thin grid-rows-3 bg-solid p-8 gap-0">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300/60 to-purple-400/60 flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        ONCHAIN COMPOSABILITY
      </div>
      <div className="flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        CROSS / ISOLATED MARGIN
      </div>
      <div className="relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <h1 className="absolute text-left bottom-4 left-4">
          JUST IN TIME <br /> LIQUIDITY
        </h1>
        <div className="absolute  right-0 top-1">
          <Image src={Pyramid} width={220} height={220} />
        </div>
      </div>
      <div className="relative col-span-1 row-span-1 border border-white border-opacity-50 h-52">
        <div className="">
          <Image className="animate-spin-slow duration-1000" src={StaticImage} />
        </div>
      </div>
      <div className="hidden lg:block relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <div className="absolute text-start bottom-4 left-4">
          <h1 className="text-sm font-thin">LEVERAGE</h1>
          <p className="text-7xl">20X</p>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={MiddleBg} width={220} height={220} />
        </div>
      </div>
      <div className="flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        PYTH PRICE <br />
        ORACLE{" "}
      </div>
      <div className="block lg:hidden relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <div className="absolute text-start bottom-4 left-4">
          <h1 className="text-sm font-thin">LEVERAGE</h1>
          <p className="text-7xl">20X</p>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={MiddleBg} width={220} height={220} />
        </div>
      </div>
      <div className="relative col-span-2 row-span-1 border border-white border-opacity-50 h-52">
        <div className="absolute text-start bottom-4 left-4">
          <h1 className="text-sm font-thin">COLLETRAL</h1>
          <p className="text-8xl">USDC</p>
        </div>
        <div className="absolute animate-spin-slow top-2 right-2">
          <Image src={Coin} width={100} height={100} />
        </div>
      </div>
      <div className="flex text-sm col-span-1 row-span-1 justify-center items-center border border-white border-opacity-50 h-52 px-4">
        PRICE BASED <br />
        ORDERS{" "}
      </div>
      <div className="col-span-1 border-0 row-span-1  border-white border-opacity-50 h-52">
        <div className="animate-spin-slow" >
          <Image src={Square} />
        </div>
      </div>
    </div>
  );
};

`;

  return (
    <div className="bg-first pb-32 flex">
      <div className="hidden xl:block w-64">
        <Sidebar />
      </div>{" "}
      <div className="block xl:w-3/4 w-screen px-4 xl:px-24 bg-first">
        <div className="w-full py-12 flex flex-col">
          <ToastContainer
            position="top-right"
            autoClose={3100}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div className="flex justify-between items-center mb-1">
            <h3 className="capitalize font-extrabold text-yellow-200 text-4xl">
              Tailwind Responsive Grid
            </h3>
            <p className="mr-4">Free</p>
          </div>
        </div>
        <SolidBento />
        <div className="pt-12 h-96  md:pt-18 mx-12">
            <p>Installion Code</p>
          <div className="border mt-3 my-12 border-yellow-200 border-dashed">
            <SyntaxHighlighter style={hybrid} code={instalationCode} />
          </div>{" "}
        </div>
        <div className="flex pt-96 items-end justify-end">
          {" "}
          <CopyToClipboard text={componentCode} onCopy={Copied}>
            <button className="shadow-[3px_3px_0px_black] mb-4 bg-yellow-200 items-center text-black hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex w-16  font-bold justify-center py-2">
              <span className="text-2xl b-4">
                <FaRegCopy />
              </span>
            </button>
          </CopyToClipboard>
        </div>
        <CodePreview code={componentCode} />
      </div>
    </div>
  );
};

export default page;
