"use client";
import React, { useState } from "react";
import Bentov2 from "./Bentov2";
import CodePreview from "../CodePreview";
import { FaEye, FaRegCopy } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SimpleBento2 = () => {
  const [showCode, setShowCode] = useState(false);

  const componentCode = `

export const Bentov2 = () => {
  return (
    <div className="grid h-96 gap-x-4 gap-y-0 grid-cols-3 grid-rows-3">
      <div className="col-span-2 bg-yellow-900 rounded-md  row-span-1"></div>
      <div className="col-span-1 bg-red-900 rounded-md  row-span-1">B</div>
      <div className="col-span-3 text-center items-center justify-center flex text-white row-span-1">
        <h1 className="text-6xl">BIG TEXT ABOUT YOUR WEBSITE</h1>
      </div>
      <div className="col-span-1 bg-blue-900 rounded-md  row-span-1">d</div>
      <div className="col-span-2 bg-purple-900 rounded-md  row-span-1">c</div>
    </div>
  );
};

`;

  const Copied = () => {
    toast.success("Copied");
  };

  return (
    <div className="w-full py-12 flex flex-col">
      <ToastContainer
        position="top-right"
        autoClose={1000}
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
            onClick={() => setShowCode(false)}
          >
            Preview
            <span className="text-2xl ml-2">
              <FaEye />
            </span>
          </button>
          <button
            className={`px-4 flex w-24  items-center shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] font-bold justify-center py-2 ${
              showCode ? "bg-yellow-200 text-first" : "bg-second text-white"
            } `}
            onClick={() => setShowCode(true)}
          >
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
      {!showCode && <Bentov2 />}
      {showCode && <CodePreview component={Bentov2} code={componentCode} />}
    </div>
  );
};

export default SimpleBento2;
