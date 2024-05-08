"use client";
import React from "react";
import { motion } from "framer-motion";
import pf from "./pf.jpg";
import { fadeIn } from "./variants";
import Image from "next/image";
import Sidebar from "../_components/SideBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

const FadeInBento = () => {
  return (
    <div className="grid mx-12 grid-cols-1 grid-rows-3 xl:grid-cols-7 xl:grid-rows-2 gap-4">
      {/* Top Left */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex rounded-xl p-2 lg:p-4 px-4 lg:px-6 col-span-1 xl:col-span-4 row-span-1 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900">
        {/* heading */}
        <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6 py-6 md:py-8 lg:py-12  mr-8 md:mr-16 lg:mr-24">
          <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">
            "Who's in a bunker? Who's in a bunker?"
          </h2>
          {/* subheading */}
          <p className="text-gray-300 text-sm xl:text-md">
            "We'll laugh until my head comes off Women and children first And
            the children first, and the children I'll laugh until my head comes
            off I'll swallow 'til I burst Until I burst, until I"
          </p>
        </div>
        <div className="relative items-center justify-center lg:w-96">
          <Image className="rounded-xl" src={pf} width="auto" height="auto" />
        </div>
      </motion.div>
      {/* Top Right */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center items-center p-4 px-6 row-span row-span-1 col-span-1 xl:col-span-3 rounded-xl bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900">
        {/* heading */}
        <div className="flex flex-col space-y-6 py-12">
          <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">"Who's in a bunker?"</h2>
          {/* subheading */}
          <p className="text-gray-300 text-sm xl:text-md">
            "I haven't seen enough, you haven't seen it I'll laugh until my head
            comes off Women and children first And children first, and children
            Here I'm alive Everything all of the time"
          </p>
        </div>
      </motion.div>
      {/* Bottom Grid */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center p-4 px-6 col-span-1 xl:col-span-7 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900">
        {/* heading */}
        <div className="flex flex-col w-2/3 h-80 py-16 mr-24">
          <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">
            "Ice Age coming, Ice Age coming"
          </h2>
          {/* subheading */}
          <p className="text-gray-300 pt-0 xl:pt-10 text-sm xl:text-md">
            "Let me hear both sides Let me hear both sides, let me hear both Ice
            Age coming, Ice Age coming Throw it in the fire Throw it in the
            fire, throw it on the We're not scaremongering This is really
            happening, happening We're not scaremongering This is really
            happening, happening.
          </p>
        </div>
        <div className="relative w-1/3">
          <Image className="rounded-xl" src={pf} width="auto" height="auto" />
        </div>
      </motion.div>
    </div>
  );
};

const page = () => {
  const Copied = () => {
    toast.success("Copied");
  };

  const instalationCode = `
You need to install some npm packages for use this component:
npm i framer-motion

create a file named variants.js in project root
// variants.js:
"use client"

export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

  `;

  const componentCode = `
 "use client";
 import Image from "next/image";
 import pf from "./pf.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

 const Page = () => {
   return (
    <div className="grid mx-12  grid-cols-1 grid-rows-3 xl:grid-cols-7 xl:grid-rows-2 gap-4">
      {/* Top Left */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex rounded-xl p-2 lg:p-4 px-4 lg:px-6 col-span-1 xl:col-span-4 row-span-1 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900">
        {/* heading */}
        <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6 py-6 md:py-8 lg:py-12  mr-8 md:mr-16 lg:mr-24">
          <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">
            "Who's in a bunker? Who's in a bunker?"
          </h2>
          {/* subheading */}
          <p className="text-gray-300 text-sm xl:text-md">
            "We'll laugh until my head comes off Women and children first And
            the children first, and the children I'll laugh until my head comes
            off I'll swallow 'til I burst Until I burst, until I"
          </p>
        </div>
        <div className="relative items-center justify-center lg:w-96">
          <Image className="rounded-xl" src={pf} width="auto" height="auto" />
        </div>
      </motion.div>
      {/* Top Right */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center items-center p-4 px-6 row-span row-span-1 col-span-1 xl:col-span-3 rounded-xl bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900">
        {/* heading */}
        <div className="flex flex-col space-y-6 py-12">
          <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">"Who's in a bunker?"</h2>
          {/* subheading */}
          <p className="text-gray-300 text-sm xl:text-md">
            "I haven't seen enough, you haven't seen it I'll laugh until my head
            comes off Women and children first And children first, and children
            Here I'm alive Everything all of the time"
          </p>
        </div>
      </motion.div>
      {/* Bottom Grid */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center p-4 px-6 col-span-1 xl:col-span-7 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900">
        {/* heading */}
        <div className="flex flex-col w-2/3 h-80 py-16 mr-24">
          <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">
            "Ice Age coming, Ice Age coming"
          </h2>
          {/* subheading */}
          <p className="text-gray-300 pt-0 xl:pt-10 text-sm xl:text-md">
            "Let me hear both sides Let me hear both sides, let me hear both Ice
            Age coming, Ice Age coming Throw it in the fire Throw it in the
            fire, throw it on the We're not scaremongering This is really
            happening, happening We're not scaremongering This is really
            happening, happening.
          </p>
        </div>
        <div className="relative w-1/3">
          <Image className="rounded-xl" src={pf} width="auto" height="auto" />
        </div>
      </motion.div>
    </div>
   );
 };

 export default Page;
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
        <FadeInBento />
        <div className="pb-16 py-6 lg:mx-12">
          <p>
           You can adjust direction of the effect with "up", "down", "right" and "left" props. Also you are able to change duration. If you want to make more changes you should visit <a target="_blank" href="https://www.framer.com/motion/" className="underline underline-offset-4"  >framer motion docs</a>
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
