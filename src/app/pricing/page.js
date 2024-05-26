// import Footer from "../../components/Layout/Footer.jsx";

// export default () => {
//     const plans = [
//         {
//             name: "Basic Components",
//             price: "Forever Free",
//             features: [
//                 "Copy and Paste",
//                 "Fully Responsive",
//                 "Customizable",
//                 "MIT Licence. Personal or commercial projects.",
//             ],
//             buttontext: "Browse Components",
//             buttonhref: "/",
//         },
//         {
//             name: "Premium Grids",
//             price: "$19 / forever",
//             features: [
//                 "Copy and Paste",
//                 "Beautifully Designed Premium Grids",
//                 "Fully Responsive & Customizable",
//                 "A growing library of awesome components",
//                 "React / Next.js / Tailwind CSS code",
//                 "Serves a wide variety of audience.",
//                 "Contact over chat for support",
//                 "MIT Licence. Personal or commercial projects.",
//             ],
//             buttontext: "Buys",
//             buttonhref: "/",
//         },
//         {
//             name: "Custom Grids",
//             price: "$349",
//             features: [
//                 "One component at a time",
//                 "React / Next.js / Tailwind CSS code",
//                 "Design + Development",
//                 "Unlimited Revisions",
//                 "24-hour support response time",
//                 "Private communication channel",
//                 "4-7 days turnaround time",
//                 "Pause or cancel anytime",
//             ],
//             buttontext: "Contact Us",
//             buttonhref: "/",
//         },
//     ];

//     return (
//         <section className="py-14 bg-first">
//             <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8">
//                 <div className="relative max-w-xl mx-auto sm:text-center">
//                     <h3 className="text-gray-300 text-4xl font-semibold sm:text-4xl">
//                         Pricing
//                     </h3>
//                     <div className="mt-3 max-w-xl">
//                         <p className="font-semibold text-2xl" >
//                             Buy once, use forever.

//                         </p>
//                     </div>
//                 </div>
//                 <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
//                     { plans.map((item, idx) => (
//                         <div
//                             key={ idx }
//                             className="relative flex-1 flex items-stretch flex-col p-8 border-first rounded-xl border-2"
//                         >
//                             <div>
//                                 <span className="text-blue-400 font-medium">{ item.name }</span>
//                                 <div className="mt-4 text-gray-200 text-3xl font-semibold">
//                                     { item.price }{ " " }
//                                     <span className="text-xl text-gray-200 font-normal"></span>
//                                 </div>
//                             </div>
//                             <ul className="py-8 space-y-3">
//                                 { item.features.map((featureItem, idx) => (
//                                     <li key={ idx } className="flex items-center gap-5">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="h-5 w-5 text-blue-400"
//                                             viewBox="0 0 20 20"
//                                             fill="currentColor"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                                 clipRule="evenodd"
//                                             ></path>
//                                         </svg>
//                                         { featureItem }
//                                     </li>
//                                 )) }
//                             </ul>
//                             <div className="flex-1 flex items-end"> {/* Moved the div outside of the map */ }
//                                 <button  className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-first bg-blue-400 hover:bg-indigo-500 active:bg-indigo-700">
//                                    <a href={item.buttonhref}>  { item.buttontext } </a>
//                                 </button>
//                             </div>
//                         </div>
//                     )) }
//                 </div>
//             </div>

//             <Footer />
//         </section>
//     );
// };

import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "All Premium Components Unlocked",
  "Beautifully Designed Premium Grids",
  "Fully Responsive & Customizable",
  "React / Next.js / Tailwind CSS code",
  "A growing library of awesome components",
];

const custom = [
    "One component at a time",
    "React / Next.js / Tailwind CSS code",
    "Design + Development",
    "Unlimited Revisions",
    "24 - hour support response time",
    "Private communication channel",
    "1 - 3 days turnaround time",
];





export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            No monthly fees, subscriptions, or hidden charges.
          </p>
        </div>
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-700 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">
              Pay once, use forever.
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-400"></p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-yellow-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-100 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-yellow-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-6xl text-indigo-600 font-bold tracking-tight ">
                    $19
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                                  href="/components/coming-soon"
                  className="mt-10 block w-full rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-700 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">
              Custom Grid Component
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-400"></p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-yellow-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
                      <ul
                          role="list"
                          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-100 sm:grid-cols-2 sm:gap-6">
                          { custom.map((feature) => (
                              <li key={ feature } className="flex gap-x-3">
                                  <CheckIcon
                                      className="h-6 w-5 flex-none text-yellow-600"
                                      aria-hidden="true"
                                  />
                                  { feature }
                              </li>
                          )) }
                      </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-indigo-500 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-300">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-6xl bg-indigo-500 font-bold tracking-tight ">
                    $199
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">
                    USD
                  </span>
                </p>
                <a
                  href="/contact"
                  className="mt-10 block w-full rounded-md bg-indigo-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contact
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
