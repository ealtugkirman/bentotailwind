import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="flex flex-col text-center pt-12 justify-center rounded-2xl bg-first">
      <div className="space-y-4">
        <h1 className="text-yellow-200 text-5xl font-semibold">
          Turn Your Ideas Ideas Into Reality
        </h1>
        <p className="text-white px-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet iste
          assumenda molestias voluptate et blanditiis eligendi sequi similique
          cupiditate ipsa ratione, aperiam aliquam quisquam numquam officia
          reiciendis illum quos nihil explicabo.
        </p>
      </div>
      <div className="px-32 pt-12">
        <div className="grid w-full  gap-8 grid-rows-2 grid-cols-3">
          <Card
            title="Account"
            subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet iste
          assumenda molestias voluptate et blanditiis eligend Manage profile"
            href="#"
            Icon={FiUser}
          />
          <Card
            title="Email"
            subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet iste
          assumenda molestias voluptate et blanditiis eligend Manage email"
            href="#"
            Icon={FiMail}
          />
          <Card
            title="Team"
            subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet iste
          assumenda molestias voluptate et blanditiis eligend Manage team"
            href="#"
            Icon={FiUsers}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full py-12 h-52 items-center justify-center p-4 rounded-lg  relative overflow-hidden group bg-firstlight">
      <div className="absolute inset-0 bg-yellow-200 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-3 -right-16 text-9xl text-slate-100 group-hover:text-black group-hover:rotate-12 transition-transform duration-300" />
      {/* <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-black transition-colors relative z-10 duration-300" /> */}
      <h3 className="text-start pt-8 font-medium text-lg text-white group-hover:text-black relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-start pt-4 text-sm text-white group-hover:text-black relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
