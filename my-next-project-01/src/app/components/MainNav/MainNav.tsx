import { FC } from "react";
import { FaLandmark } from "react-icons/fa";
import Link from "next/link";

const linksList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const MainNav: FC = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 md:px-10 px-7 items-center justify-between">
        <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3x1 text-teal-400 mx-2 ">
            <FaLandmark />
          </span>
          <h1 className="text-3xl">
            <span className="text-teal-400">XYZ</span> Consulting Services
          </h1>
        </div>
        <ul className="md: flex md: items-center">
          {linksList.map((link) => (
            <li key={link.name} className="md:ml-8 text-2xl">
              <Link
                className="text-gray-800 hover:text-teal-400 duration-500"
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
