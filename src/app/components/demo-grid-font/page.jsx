"use client";
import React from "react";
import Sidebar from "../_components/SideBar";
import { Jacques_Francois } from "next/font/google";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";
import Image from "next/image";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "react-toastify/dist/ReactToastify.css";

const jaq = Jacques_Francois({
  subsets: ["latin"],
  weight: ["400"],
});

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

const FontDemo = () => {
  return (
    <div className={jaq.className}>
      <div className="text-dark  p-6 gap-2 rounded-xl h-full lg:h-96 bg-white  grid lg:grid-cols-2 lg:grid-rows-5">
        <div className="flex font-bold text-2xl justify-center items-center row-span-1 col-span-1 py-6 lg:py-0 bg-yellow-200/50 rounded-xl ">
          Jacques Francois
        </div>
        <div className="flex text-center text-3xl px-8 justify-center items-center row-span-2 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          <p>a b c d e f g h i j k l m n o r q r s t u v w x y z</p>
        </div>
        <div className="flex px-6 justify-center items-center row-span-3 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          Everyone has the right to an effective remedy by the component
          national tribunals for acts violating the fundamental rights granted
          him by the constitutin by law.
        </div>
        <div className="flex text-2xl justify-center items-center row-span-1 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          <p> ! @ # $ % & * ; ' " ; ? !/</p>
        </div>
        <div className="capitalize px-8 flex text-2xl justify-center items-center row-span-2 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          a b c d e f g h i j k l m n o r q r s t u v w x y z
        </div>
        <div className="capitalize text-2xl flex justify-center items-center row-span-1 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          <p>0 1 2 3 4 5 6 7 8 9</p>
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
npm i @next/font
  `;

  const componentCode = `
import { Jacques_Francois } from "next/font/google";

const jaq = Jacques_Francois({
subsets: ["latin"],
weight: ["400"],

const FontDemo = () => {
  return (
    <div className={jaq.className}>
      <div className="text-dark  p-6 gap-2 rounded-xl h-full lg:h-96 bg-white  grid lg:grid-cols-2 lg:grid-rows-5">
        <div className="flex font-bold text-2xl justify-center items-center row-span-1 col-span-1 py-6 lg:py-0 bg-yellow-200/50 rounded-xl ">
          Jacques Francois
        </div>
        <div className="flex text-center text-3xl px-8 justify-center items-center row-span-2 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          <p>a b c d e f g h i j k l m n o r q r s t u v w x y z</p>
        </div>
        <div className="flex px-6 justify-center items-center row-span-3 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          Everyone has the right to an effective remedy by the component
          national tribunals for acts violating the fundamental rights granted
          him by the constitutin by law.
        </div>
        <div className="flex text-2xl justify-center items-center row-span-1 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          <p> ! @ # $ % & * ; ' " ; ? !/</p>
        </div>
        <div className="capitalize px-8 flex text-2xl justify-center items-center row-span-2 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          a b c d e f g h i j k l m n o r q r s t u v w x y z
        </div>
        <div className="capitalize text-2xl flex justify-center items-center row-span-1 col-span-1 py-6 lg:py-0 bg-gray-200 rounded-xl ">
          <p>0 1 2 3 4 5 6 7 8 9</p>
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
              Demo Grid for Fonts
            </h3>
            <p className="mr-4">Free</p>
          </div>
        </div>
        <FontDemo />
        <div className="pt-12 h-96  md:pt-18 mx-12">
          <p>You need to install next-font-google package:</p>
          <div className="border mt-3 my-12 border-yellow-200 border-dashed">
            <SyntaxHighlighter style={hybrid} code={instalationCode} />
          </div>{" "}
        </div>
        <div className="flex pt-12 items-end justify-end">
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
