import Image from "next/image";
import laptop from "../../public/laptop.png"

export const Hero = () => {
  return (
    <div className="relative bg-first text-gray-300 pb-20 flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-40 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full  overflow-hidden lg:pt-24 lg:pb-16 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <Image
          src={laptop}
          className="object-cover object-right w-full mr-12 h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="text-yellow-200 inline-block px-3 py-px mb-4 text-2xl font-bold tracking-wider  uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-xl  mb-6 text-7xl font-bold tracking-tight  sm:leading-none">
              Bento Grids {""}
              <br className="hidden md:block" />
              and{" "}
              <span className="inline-block text-yellow-200">
                Tailwind Css
              </span>
            </h2>
            <p className="text-4xl font-semibold md:text-lg">
              Do you love Bento Grids and Tailwind Css?
              <br />
              You can use Bento Grids with Tailwind Css with 2 clicks{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
