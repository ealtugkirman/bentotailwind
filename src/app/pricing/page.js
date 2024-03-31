import Footer from "@/components/Layout/Footer";

export default () => {
    const plans = [
        {
            name: "Basic Components",
            price: "Forever Free",
            features: [
                "Copy and Paste",
                "Fully Responsive",
                "Customizable",
                "MIT Licence. Personal or commercial projects.",
            ],
            buttontext: "Browse Components",
            buttonhref: "/",
        },
        {
            name: "Premium Grids",
            price: "$29 / forever",
            features: [
                "Copy and Paste",
                "Beautifully Designed Premium Grids",
                "Fully Responsive & Customizable",
                "A growing library of awesome components",
                "React / Next.js / Tailwind CSS code",
                "Serves a wide variety of audience.",
                "Contact over chat for support",
                "MIT Licence. Personal or commercial projects.",
            ],
            buttontext: "Buys",
            buttonhref: "/",
        },
        {
            name: "Custom Grids",
            price: "$349",
            features: [
                "One component at a time",
                "React / Next.js / Tailwind CSS code",
                "Design + Development",
                "Unlimited Revisions",
                "24-hour support response time",
                "Private communication channel",
                "4-7 days turnaround time",
                "Pause or cancel anytime",
            ],
            buttontext: "Contact Us",
            buttonhref: "/",
        },
    ];

    return (
        <section className="py-14 bg-first">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8">
                <div className="relative max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-300 text-4xl font-semibold sm:text-4xl">
                        Pricing
                    </h3>
                    <div className="mt-3 max-w-xl">
                        <p className="font-semibold text-2xl" > 
                            Buy once, use forever.

                        </p>
                    </div>
                </div>
                <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
                    { plans.map((item, idx) => (
                        <div
                            key={ idx }
                            className="relative flex-1 flex items-stretch flex-col p-8 border-first rounded-xl border-2"
                        >
                            <div>
                                <span className="text-blue-400 font-medium">{ item.name }</span>
                                <div className="mt-4 text-gray-200 text-3xl font-semibold">
                                    { item.price }{ " " }
                                    <span className="text-xl text-gray-200 font-normal"></span>
                                </div>
                            </div>
                            <ul className="py-8 space-y-3">
                                { item.features.map((featureItem, idx) => (
                                    <li key={ idx } className="flex items-center gap-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        { featureItem }
                                    </li>
                                )) }
                            </ul>
                            <div className="flex-1 flex items-end"> {/* Moved the div outside of the map */ }
                                <button  className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-first bg-blue-400 hover:bg-indigo-500 active:bg-indigo-700">
                                   <a href={item.buttonhref}>  { item.buttontext } </a>
                                </button>
                            </div>
                        </div>
                    )) }
                </div>
            </div>

            <Footer />
        </section>
    );
};
