"use client";
import React from "react";
import Sidebar from "../_components/SideBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";
import Image from "next/image";
import blogbg from "./vercelblog.avif";
import Link from "next/link";
import avatar from "./pf.jpg";
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
    <div className="grid p-4 px-12 lg:px-0 lg:grid-cols-3 h-100 gap-2 lg:grid-rows-3 bg-dark">
      <Link href="/" className="relative flex row-span-3 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            This is bento grid in vercel blog
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link  href="/" className="relative flex row-span-1 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            This is bento grid in vercel blog
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link href="/" className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link href="/" className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link href="/" className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
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
import Image from "next/image";
import blogbg from "./vercelblog.avif";
import Link from "next/link";
import avatar from "./pf.jpg";

const SolidBento = () => {
  return (
     <div className="grid p-4 lg:grid-cols-3 h-100 gap-2 lg:grid-rows-3 bg-dark">
      <Link href="/" className="relative flex row-span-3 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            This is bento grid in vercel blog
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link  href="/" className="relative flex row-span-1 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            This is bento grid in vercel blog
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link href="/" className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link href="/" className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
      <Link href="/" className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark">
        <Image
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={blogbg}
        />
        <div className="absolute capitalize bottom-4 left-4 text-white">
          <h1 className="text-lg font-semibold mb-4 leading-6 mr-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h1>
          <div className="abolute text-gray-300 left-4 bottom-4 text-xs flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={avatar}
              width={20}
              height={20}
            />
            <p>Micheal Jordan</p>
            <p className="right-4 text-gray-300 absolute">12.10.1999</p>
          </div>{" "}
        </div>
      </Link>
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
        {/* <div className="pt-12 h-96  md:pt-18 mx-12">
          <p>Installion Code</p>
          <div className="border mt-3 my-12 border-yellow-200 border-dashed">
            <SyntaxHighlighter style={hybrid} code={instalationCode} />
          </div>{" "}
        </div> */}
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
