const Duyuru = () => {
 
  return (
    <div className="bg-yellow-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3 text-firstdark sm:text-center md:px-8">
        <div className="text-sm">
          Limited Offer: BentoTailwind is{" "}
          <strong>free for the first 100 users. </strong>
          <br />
          <div>
              <span>Remaining Seat: 51</span>
          </div>
          <button className="px-3 ml-4 py-1 font-medium bg-yellow-400 text-firstdark w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            <a href="https://accounts.bentotailwind.com/sign-up">Sign Up Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Duyuru;
