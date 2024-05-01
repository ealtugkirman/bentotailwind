// import React from "react";
// import Image from "next/image";
// import { BiDollar } from "react-icons/bi";
// import { MdArrowRightAlt } from "react-icons/md";

// const GridCard = ({ title, desc, image, href, paid }) => {
//   return (
//     <div className="border-2 pb-6 flex flex-col text-white border-gray-500 rounded-2xl">
//       <a href={href}>
//         <div className="font-thin justify-end mr-5 text-lg mt-3 flex">
//           <div className="items-center bg-green-400 px-1 rounded-md text-black flex" >
//             <BiDollar />
//             Free
//           </div>
//         </div>
//           <div className="font-thin justify-end mr-5 text-lg mt-3 flex">
//           <div className="items-center pl-2 px-3 text-white border-gray-400 border  rounded-md flex" >
//             Unlock the code
//             <MdArrowRightAlt />
//           </div>
//         </div>
//         <div className="m-12">
//           <Image width={500} height={500} src={image} alt={title} />
//         </div>{" "}
//         <h1 className="text-2xl text-lightgradient ml-8 mr-4font-bold">
//           {title}
//         </h1>
//         <p className="text-base leading-6 ml-8 mr-8">{desc}</p>
//       </a>
//     </div>
//   );
// };

// export default GridCard;

import React from "react";
import Image from "next/image";
import { BiDollar } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";

const GridCard = ({ title, desc, image, href, paid }) => {
  return (
    <div className="border-2 pb-6 flex flex-col text-white border-gray-500 rounded-2xl">
      <a href={href}>
        {paid ? (
          <div className="font-thin justify-end mr-5 text-lg mt-3 flex">
            <div className="items-center pl-2 px-3 text-white border-gray-400 border rounded-md flex">
              Unlock the code
              <MdArrowRightAlt />
            </div>
          </div>
        ) : (
          <div className="font-thin justify-end mr-5 text-lg mt-3 flex">
            <div className="items-center bg-green-400 px-1 rounded-md text-black flex">
              <BiDollar />
              Free
            </div>
          </div>
        )}
        <div className="m-12">
          <Image width={1000} height={1000} src={image} alt={title} />
        </div>{" "}
        <h1 className="text-2xl text-lightgradient ml-8 mr-4font-bold">
          {title}
        </h1>
        <p className="text-base leading-6 ml-8 mr-8">{desc}</p>
      </a>
    </div>
  );
};

export default GridCard;
