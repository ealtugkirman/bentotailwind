export default () => {
  return (
    <section className="relative overflow-hidden py-28 px-4 bg-first md:px-8">
      <div className="w-full h-full rounded-full bg-gradient-to-b from-first to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
      <div className="max-w-xl mx-auto text-center relative">
        <div className="py-4">
          <h3 className="text-3xl text-yellow-200 font-semibold md:text-4xl">
            Get Unlimited Access To All Grids
          </h3>
          <p className="text-gray-300 leading-relaxed mt-3">
            Start to use all premium grids with one time payment
          </p>
        </div>
        <div className="mt-5 items-center justify-center gap-3 sm:flex">
          <a
            href="/components"
            className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto">
            See All Components
          </a>
          <a
            href="pricing"
            className="block w-full mt-2 py-2.5 px-8 text-first hover:text-white bg-yellow-200 rounded-md duration-150 hover:bg-second sm:w-auto">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};
