"use client";
import React, { useState } from "react";
import Bentov1 from "./Bentov1";
import CodePreview from "../CodePreview";
import { FaEye, FaRegCopy } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SimpleBento = () => {
  const [showCode, setShowCode] = useState(false);

  const componentCode = `
import React from "react";

const MyComponent = () => {
  return (
    <div className="grid h-80 grid-cols-5 gap-2  grid-rows-3">
      <div className=" col-span-2 row-span-2 bg-blue-500">a</div>
      <div className="col-span-3 row-span-1 bg-red-500">b</div>
      <div className="col-span-1 row-span-2 bg-yellow-500">c</div>
      <div className="col-span-2 row-span-2 bg-green-500">d</div>
      <div className="col-span-1 row-span-1 bg-cyan-500">e</div>
      <div className="col-span-1 row-span-1 bg-purple-500">f</div>
    </div>
  );
};

export default MyComponent;
`;

  const Copied = () => {
    toast.success("Copied");
  };

  return (
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
      {!showCode && <Bentov1 />}
      {showCode && <CodePreview component={Bentov1} code={componentCode} />}
    </div>
  );
};

export default SimpleBento;
