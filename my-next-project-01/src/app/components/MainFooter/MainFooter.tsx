import { FC } from "react";
import FooterItemsContainer from "./FooterItemsContainer/FooterItemsContainer";
const MainFooter: FC = () => {
  return (
    <footer className="w-full pb-5">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-200 text-gray-800 bd-[#ffffff19] py-7">
        <h1 className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:2/5">
          Test it for <span className="text-teal-400">Free</span> until you are
          ready to lunch
        </h1>
      </div>
      <FooterItemsContainer />
    </footer>
  );
};

export default MainFooter;
