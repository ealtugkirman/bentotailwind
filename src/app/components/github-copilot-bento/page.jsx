"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { RiCopilotFill, RiOpenaiFill } from "react-icons/ri";
import { GiCrackedShield } from "react-icons/gi";
import { FaGithub, FaRegCopy, FaWindows } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";
import Sidebar from "../_components/SideBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
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

const CoPilotBento = () => {
  return (
    <div className="flex flex-col xl:grid xl:h-screen  xl:space-y-0 bg-gray-900 p-5  rounded-lg gap-5  xl:grid-cols-5 xl:grid-rows-4">
      <div className="rounded-lg px-12 justfiy-center items-end col-span-1 row-span-1 xl:col-span-3 bg-gradient-to-l from-blue-600 to-blue-800  xl:row-span-2">
        <h1 className="text-white mt-8 text-xl xl:text-3xl">
          Proven to increase developer productivty and accelerate the pace of
          software development
        </h1>
        <span className="flex cursor-pointer font-lg mb-4 flex-row mt-20 items-center justify-start">
          Read the research <IoIosArrowForward />
        </span>
      </div>
      <div className="rounded-lg col-span-2 px-6  bg-darkblue row-span-2">
        <div className="text-7xl p-4 ">
          <BsFillLightningChargeFill className="shadow-2xl shadow-slate-100 bg-dark p-4 rounded-full text-white border-blue-700 border" />
        </div>
        <div className="flex flex-col items-start mt-20 mb-4 xl:mt-40 align-bottom">
          <h1 className="text-2xl font-semibold">55% faster coding</h1>
          <span className="text-gray-400">faster coding</span>
        </div>
      </div>
      <div className="rounded-lg col-span-2 px-8 bg-darkblue row-span-2">
        <div className="text-xl flex flex-row mt-6 xl:mt-12 space-x-6 justify-center items-center">
          <RiCopilotFill className="shadow-2xl shadow-slate-100 bg-dark p-4 text-7xl  rounded-full text-white border-blue-700 border" />
          <FaWindows className="text-gray-400 text-3xl " />
          <FaGithub className="text-gray-400 text-3xl " />
          <RiOpenaiFill className="text-gray-400 text-3xl " />
        </div>
        <div>
          <h1 className="text-2xl mt-6 mb-4 xl:mt-20 font-semibold">
            Designed by leaders in AI so you can build with confidence
          </h1>
        </div>
      </div>
      <div className="rounded-lg relative col-span-3 px-12 pt-8  row-span-2 bg-gradient-to-r from-blue-600 to-blue-800 ">
        <h1 className="text-2xl xl:text-3xl">
          Committed to your privacy, security, and trust
        </h1>
        <div className="text-9xl absolute right-0 bottom-2 xl:bottom-12 ">
          <GiCrackedShield className="text-yellow-300/30" />
        </div>
        <span className="flex cursor-pointer font-lg flex-row mt-20 mb-4 xl:mt-44 items-center justify-start">
          Visit the Github CoPilot Trust Center <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

const page = () => {
  const Copied = () => {
    toast.success("Copied");
  };

  const instalationCode = `
You need to install some npm packages for use this component:

npm i react-icons
  `;

  const componentCode = `
import { RiCopilotFill, RiOpenaiFill } from "react-icons/ri";
import { GiCrackedShield } from "react-icons/gi";
import { FaGithub, FaRegCopy, FaWindows } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

const CoPilotBento = () => {
  return (
  <div className="grid h-screen bg-gray-900 p-5  rounded-lg gap-5 grid-cols-5 grid-rows-4">
      <div className="rounded-lg px-12 justfiy-center items-end col-span-3 bg-gradient-to-l from-blue-600 to-blue-800  row-span-2">
        <h1 className="text-white mt-8 text-3xl">
          Proven to increase developer productivty and accelerate the pace of
          software development
        </h1>
        <span className="flex cursor-pointer font-lg flex-row mt-32 items-center justify-start">
          Read the research <IoIosArrowForward />
        </span>
      </div>
      <div className="rounded-lg col-span-2 px-6  bg-darkblue row-span-2">
        <div className="text-7xl p-4 ">
          <BsFillLightningChargeFill className="shadow-2xl shadow-slate-100 bg-dark p-4 rounded-full text-white border-blue-700 border" />
        </div>
        <div className="flex flex-col items-start mt-40 align-bottom">
          <h1 className="text-2xl font-semibold">55% faster coding</h1>
          <span className="text-gray-400">faster coding</span>
        </div>
      </div>
      <div className="rounded-lg col-span-2 px-8 bg-darkblue row-span-2">
        <div className="text-xl flex flex-row mt-12 space-x-6 justify-center items-center">
          <RiCopilotFill className="shadow-2xl shadow-slate-100 bg-dark p-4 text-7xl  rounded-full text-white border-blue-700 border" />
          <FaWindows className="text-gray-400 text-3xl " />
          <FaGithub className="text-gray-400 text-3xl " />
          <RiOpenaiFill className="text-gray-400 text-3xl " />
        </div>
        <div>
          <h1 className="text-2xl mt-20 font-semibold">
            Designed by leaders in AI so you can build with confidence
          </h1>
        </div>
      </div>
      <div className="rounded-lg relative col-span-3 px-12 pt-8  row-span-2 bg-gradient-to-r from-blue-600 to-blue-800 ">
        <h1 className="text-3xl">
          Committed to your privacy, security, and trust
        </h1>
        <div className="text-9xl absolute right-2 bottom-12 " >
          <GiCrackedShield className="text-yellow-300/30" />
        </div>
        <span className="flex cursor-pointer font-lg flex-row mt-44 items-center justify-start">
          Visit the Github CoPilot Trust Center <IoIosArrowForward />
        </span>
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
            <p className="mr-4" >Free</p>
          </div>
        </div>
        <CoPilotBento />
        <div className="pt-12 h-96  md:pt-18 mx-12">
          <div className="border mt-3 my-12 border-yellow-200 border-dashed">
            <SyntaxHighlighter style={hybrid} code={instalationCode} />
          </div>{" "}
        </div>
        <div className="flex  items-end justify-end">
          {" "}
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
