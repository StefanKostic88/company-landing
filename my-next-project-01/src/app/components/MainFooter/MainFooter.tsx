"use client";
import { FC, useEffect, useState } from "react";
import FooterItemsContainer from "./FooterItemsContainer/FooterItemsContainer";

const MainFooter: FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 152) return;
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <footer className="w-full pb-5">
      <div className="md:flex md:justify-between  sm:px-12 px-4 bg-gray-200 text-gray-800 bd-[#ffffff19] py-7 flex-col">
        <h1 className="text-xl md:text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:2/5">
          Test it for <span className="text-teal-400">Free</span> until you are
          ready to lunch
        </h1>
        <div>
          <h2 className="text-xl font-semibold">
            Over <span className="text-teal-400">{count} </span>
            <span className="underline decoration-teal-400">
              satisfied clients
            </span>
          </h2>
        </div>
      </div>

      <FooterItemsContainer />
    </footer>
  );
};

export default MainFooter;
