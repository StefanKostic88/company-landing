import { Features, Wraper } from "../components";
import { servicesArr } from "../assets/helperData";
const Page = () => {
  return (
    <Wraper>
      <div>
        {servicesArr.map((el) => (
          <Features {...el} />
        ))}
      </div>
    </Wraper>
  );
};

export default Page;
