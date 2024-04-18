import Image from "next/image";
import Logo from "../../../public/Logo/2.png";

export default () => {
  const footerNavs = [
    {
      href: "/terms",
      name: "Terms",
    },
    {
      href: "/privacypolicy",
      name: "Privacy Policy",
    },
    // {
    //   href: "/refund",p
    //   name: "Refund Policy",
    // },
  ];
  return (
    <footer className="pt-20 ">
      <div className="max-w-screen-xl  md:h-80 mx-auto px-4 text-white md:px-8">
        <div className="space-y-3 md:space-y-6 sm:max-w-md sm:mx-auto text-center">
          <Image src={Logo} className="w-24 md:w-32 mx-auto" />
          <p>
            Bento Tailwind Component Library Coded By{" "}
            <a href="https://digitalvoyage.agency">DigitalVoyage.Agency</a> with
            Love and Coffee{" "}
          </p>
          <div className="items-center gap-x-3 space-y-3 flex justify-center sspace-y-0">
            <a
              href="/components"
              className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
              Let's get started
            </a>
            {/* <a
              href="/pricing"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-400 hover:text-gray-200 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
              See Pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between flex flex-col md:flex-row">
          <p className="mb-4" >© 2024 DigitalVoyage.agency. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 text-sm ">
            {footerNavs.map((item, idx) => (
              <li className="text-gray-200 hover:text-white duration-150">
                <a key={idx} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
