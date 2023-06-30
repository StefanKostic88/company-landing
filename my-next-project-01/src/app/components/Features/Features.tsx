import { FC } from "react";
import { FaCriticalRole } from "react-icons/fa";

interface Props {
  rightSide: boolean;
  title: string;
  data: { spanEl: string; text: string }[];
  img: string;
}

const Features: FC<Props> = ({ rightSide, data, title, img }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-20 ">
      {!rightSide && (
        <div className="flex items-center justify-center">
          <img className="object-contain h-128 w-96" src={img} alt={img} />
        </div>
      )}
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-4xl mb-8">{title}</h1>
        <ul>
          {data.map(({ spanEl, text }) => {
            return (
              <li className="text-gray-800 leading-9" key={spanEl}>
                <h3 className="">
                  <span className="text-xl text-gray-800 font-semibold">
                    {spanEl}:
                  </span>
                  <span className="text-lg"> {text}</span>
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
      {rightSide && (
        <div className="flex items-center justify-center">
          <img className="object-contain h-96 w-96" src={img} alt={img} />
        </div>
      )}
    </div>
  );
};

export default Features;
