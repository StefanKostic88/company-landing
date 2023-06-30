import { Wraper } from "../components";

import { abourContentArr } from "../assets/helperData";

const Page = () => {
  return (
    <Wraper>
      <div className="px-4">
        <h1 className="text-4xl font-semibold mb-10 ">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-4">
          {abourContentArr.map((el) => (
            <p className="text-xl">{el.text}</p>
          ))}
        </div>
      </div>
    </Wraper>
  );
};

export default Page;
