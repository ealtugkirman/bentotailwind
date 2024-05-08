"use client";
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
      <div className="h-full">
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const SimpleBentoWithTextVisual = () => {
  return (
    <div className="grid h-96 gap-x-4 gap-y-0 grid-cols-5 grid-rows-3">
      <div className="col-span-3 bg-firstlight   row-span-1" />
      <div className="col-span-2 bg-firstlight   row-span-1" />
      <div className="col-span-5 text-center items-center justify-center flex text-white row-span-1">
        <h1 className="text-6xl capitalize">
          BIG TEXT FOR YOUR WEBSITE
        </h1>
      </div>
      <div className="col-span-2 bg-firstlight   row-span-1" />
      <div className="col-span-3 bg-firstlight   row-span-1" />
    </div>
  );
};

const SimpleBentoWithText = () => {
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
    <div className="bg-first pb-32 flex">
      <div className="hidden lg:block w-1/5">
        <Sidebar />
      </div>{" "}
      <div className="hidden lg:block w-4/5 px-24 bg-first">
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
        <SimpleBentoWithTextVisual />
        <p className="py-12 italic">No installion needed for this component</p>
        <div className="flex items-end justify-end">
          {" "}
          <CopyToClipboard text={componentCode} onCopy={Copied}>
            <button className="shadow-[3px_3px_0px_black] bg-yellow-200 items-center text-black hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex w-16  font-bold justify-center py-2">
              <span className="text-2xl">
                <FaRegCopy />
              </span>
            </button>
          </CopyToClipboard>
        </div>
        <CodePreview
          component={SimpleBentoWithTextVisual}
          code={componentCode}
        />
      </div>
    </div>
  );
};

export default SimpleBentoWithText;
