"use client";
import React, { useState } from "react";
import Sidebar from "../_components/SideBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodePreview = ({ component: Component, code }) => {
  return (
    <div className="w-full">
      <div className="h-96">
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const SimpleBentoVisual = () => {
  return (
    <div className="grid h-96 grid-cols-5 gap-2  grid-rows-3">
      <div className=" col-span-2 row-span-2 bg-blue-500" />
      <div className="col-span-3 row-span-1 bg-red-500" />
      <div className="col-span-1 row-span-2 bg-yellow-500" />
      <div className="col-span-2 row-span-2 bg-green-500" />
      <div className="col-span-1 row-span-1 bg-cyan-500" />
      <div className="col-span-1 row-span-1 bg-purple-500" />
    </div>
  );
};

const SimpleBento = () => {

  const Copied = () => {
    toast.success("Copied");
  };

  const componentCode = `
import React from "react";

const MyComponent = () => {
  return (
    <div className="grid h-80 grid-cols-5 gap-2  grid-rows-3">
      <div className=" col-span-2 row-span-2 bg-blue-500"/>
      <div className="col-span-3 row-span-1 bg-red-500"/>
      <div className="col-span-1 row-span-2 bg-yellow-500"/>
      <div className="col-span-2 row-span-2 bg-green-500"/>
      <div className="col-span-1 row-span-1 bg-cyan-500"/>
      <div className="col-span-1 row-span-1 bg-purple-500"/>
    </div>
  );
};

export default MyComponent;
`;

  return (
    <div className="bg-gradient-dark flex">
      <div className="hidden lg:block lg:w-1/4 w-1/5">
        <Sidebar />
      </div>{" "}
      <div className="hidden lg:block lg:3/4 w-4/5 px-24 bg-first">
        {/* <div className="w-full py-12 flex flex-col">
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
          <div className="flex justify-between items-center mb-4">
            <p className="capitalize font-extrabold text-yellow-200 text-4xl">
              SIMPLE BENTO GRID
            </p>
            <div className="flex flex-row">
              <button
                className={`px-6 mr-2 shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex w-32 items-center font-bold justify-center py-2 ${
                  showCode ? "bg-second text-white" : "bg-yellow-200 text-first"
                } `}
                onClick={() => setShowCode(false)}>
                Preview
                <span className="text-2xl ml-2">
                  <FaEye />
                </span>
              </button>
              <button
                className={`px-4 flex w-24  items-center shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] font-bold justify-center py-2 ${
                  showCode ? "bg-yellow-200 text-first" : "bg-second text-white"
                } `}
                onClick={() => setShowCode(true)}>
                Code{" "}
                <span className="text-2xl ml-2">
                  <IoCodeSlash />
                </span>
              </button>
              <CopyToClipboard text={componentCode} onCopy={Copied}>
                <button className="px-6 ml-2 shadow-[3px_3px_0px_black] bg-red-500 text-white hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex w-16 items-center font-bold justify-center py-2">
                  <span className="text-2xl">
                    <FaRegCopy />
                  </span>
                </button>
              </CopyToClipboard>
            </div>
          </div>
          {!showCode && <Bentov1 />}
          {showCode && <CodePreview component={Bentov1} code={componentCode} />}
        </div> */}
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
              SIMPLE BENTO GRID
            </h3>
            <p>Free</p>
          </div>
        </div>
        <SimpleBentoVisual />
        <p className="py-12 italic">No installion needed for this component</p>
        <div className="flex items-end justify-end">
          {" "}
          <CopyToClipboard text={componentCode} onCopy={Copied}>
            <button className="shadow-[3px_3px_0px_black] text-white hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex w-16 items-end font-bold justify-end py-2">
              <span className="text-2xl">
                <FaRegCopy />
              </span>
            </button>
          </CopyToClipboard>
        </div>
        <CodePreview component={SimpleBentoVisual} code={componentCode} />
      </div>
    </div>
  );
};

export default SimpleBento;
