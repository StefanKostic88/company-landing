import { FC } from "react";
interface Props {
  dataObj: { title: string; data: string[] };
}

const FooterItem: FC<Props> = ({ dataObj: { title, data } }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {data.map((item) => (
        <li
          className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
