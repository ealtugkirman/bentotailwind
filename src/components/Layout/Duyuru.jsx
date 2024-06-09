"use client";
import { useState, useEffect } from "react";

const Duyuru = () => {
  const [userCount, setUserCount] = useState(null);

  const fetchUserCount = async () => {
    try {
      const response = await fetch("/api/userCount");
      const data = await response.json();
      setUserCount(data.userCount);
    } catch (error) {
      console.error("Kullanıcı sayısı çekilemedi:", error);
    }
  };

  useEffect(() => {
    fetchUserCount();
  }, []);

  return (
    <div className="bg-yellow-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3 text-firstdark sm:text-center md:px-8">
        <p className="text-sm">
          Limited Offer: BentoTailwind is{" "}
          <strong>free for the first 100 users. </strong>
          <br />
          <div>
            {userCount !== null ? (
              <span>{` Remaining Seat: ${95 - userCount}`}</span>
            ) : (
              <span>Checking for empty seats...</span>
            )}
          </div>
          <button className="px-3 ml-4 py-1 font-medium bg-yellow-400 text-firstdark w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            <a href="https://accounts.bentotailwind.com/sign-up">Sign Up Now</a>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Duyuru;
