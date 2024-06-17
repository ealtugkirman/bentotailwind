"use client";
import React from "react";
import m1 from "./m1.png"
import Image from "next/image";
import Sidebar from "../_components/SideBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "react-toastify/dist/ReactToastify.css";
import { BsFillLightningChargeFill } from "react-icons/bs";

const CodePreview = ({ component: Component, code }) => {
  return (
    <div className="w-full">
      <div className="h-full">
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const AppleM1 = () => {
  return (
    <div className="grid grid-rows-8 gap-3 bg-dark h-1/2 grid-cols-12">
      <div className="flex items-center justify-between flex-col col-span-3 row-span-2 rounded-lg bg-gray-500/10 ">
        <div />
        <h1 className="text-3xl border px-6 py-2 mt-3 text-lightgradient border-purple-500 rounded-2xl ">
          ProRes
        </h1>
        <p className="text-xs font-thin pb-1 text-lightgradient ">
          Encode and Decode
        </p>
      </div>
      <div
        className="col-span-1 flex flex-col items-center justify-between
       row-span-2 rounded-lg bg-gray-500/10 ">
        <div />
        <div className="text-5xl ">
          <BsFillLightningChargeFill />
        </div>{" "}
        <p className=" text-[8px] p-1">ThunderBolt 4</p>
      </div>
      <div className="col-span-3 row-span-1 rounded-lg bg-gray-500/10 flex">
        <p className="text-xl  flex mx-auto items-center justify-center clear-start font-semibold text-lightgradient ">
          5 nm process
        </p>
      </div>
      <div className="col-span-1 row-span-1 rounded-lg bg-gray-500/10 ">
        <div className="text-md text-lightgradient mt-2 text-center ">
          <p  >114 Billion</p>
        </div>{" "}
        <p className=" text-[8px] text-center p-1">Transistors</p>
      </div>
      <div className="col-span-4 item-center py-2 justify-between flex-col  flex text-center row-span-2 rounded-lg bg-gray-500/10 ">
        <p className="text-[8px] " >silicon interposer with</p>
        <h3 className="text-6xl font-semibold text-lightgradient" >2.5TB/s</h3>
        <p className="text-[8px] " >interprocessor bandwidth</p>
      </div>
      <div className="col-span-4 row-span-6 flex p-6 items-center justify-center rounded-lg bg-gray-500/10 ">
        <div className="" >
           <Image src={m1} width={500} height={500} alt="" />
     </div>
      </div>
      <div className="col-span-4 row-span-2 rounded-lg bg-gray-500/10 "></div>
      <div className="col-span-4 row-span-4 rounded-lg bg-gray-500/10 "></div>
      <div className="col-span-2 row-span-3 rounded-lg bg-gray-500/10 "></div>
      <div className="col-span-2 row-span-3 rounded-lg bg-gray-500/10 "></div>
      <div className="col-span-4 row-span-2 rounded-lg bg-gray-500/10 "></div>
      <div className="col-span-4 row-span-1 rounded-lg bg-gray-500/10 "></div>
      <div className="col-span-1 row-span-1 rounded-lg bg-gray-500/10 "></div>
      <div className="col-span-3 row-span-1 rounded-lg bg-gray-500/10 "></div>
    </div>
  );
};

const page = () => {
  const Copied = () => {
    toast.success("Copied");
  };

  const instalationCode = `
  `;

  const componentCode = `
`;

  return (
    <div className="bg-first flex">
      <div className="hidden lg:block w-1/5">
        <Sidebar />
      </div>{" "}
      <div className="w-4/5 lg:px-24 pb-32 space-y-12  bg-first">
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
              Bento Grid with Fade In effect.
            </h3>
            <p>Free</p>
          </div>
        </div>
        <AppleM1 />
        <div className="pb-16 py-6 lg:mx-12">
          <p>
            You can adjust direction of the effect with "up", "down", "right"
            and "left" props. Also you are able to change duration. If you want
            to make more changes you should visit{" "}
            <a
              target="_blank"
              href="https://www.framer.com/motion/"
              className="underline underline-offset-4">
              framer motion docs
            </a>
          </p>
          <div className="border mt-3  border-yellow-200 border-dashed">
            <SyntaxHighlighter style={hybrid} code={instalationCode} />
          </div>{" "}
        </div>
        <div className="flex items-end justify-end">
          <CopyToClipboard text={componentCode} onCopy={Copied}>
            <button className="shadow-[3px_3px_0px_black] bg-yellow-200 items-center text-black hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex w-16  font-bold justify-center py-2">
              <span className="text-2xl">
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
