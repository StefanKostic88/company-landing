import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Wraper: FC<Props> = ({ children }) => {
  return (
    <main className="max-w-6xl  flex flex-col items-center justify-between mx-auto md:mt-24 mb-12 px-10 pt-48  md:py-10  shadow-2xl">
      {children}
    </main>
  );
};

export default Wraper;
