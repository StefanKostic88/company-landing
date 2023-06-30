export default function Home() {
  return (
    <div className="w-full mb-12 mt-24 md:mb-0 px-7 pb-3 ">
      <div className="flex lg:container mx-auto  flex-col md:flex-row shadow-xl rounded-lg overflow-hidden">
        <div className=" flex flex-col gap-4  items-center justify-center py-7 flex-1  md:basis-3/5">
          <h1 className="text-3xl lg:text-4xl font-semibold ">
            XYZ Consulting Services
          </h1>
          <h2 className="text-2xl">Your oppinion really matters </h2>
        </div>
        <div className="flex-1  md:basis-2/4">
          <img
            className="object-cover hover:object-scale-down "
            src="https://images.pexels.com/photos/273254/pexels-photo-273254.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </div>
      </div>
    </div>
  );
}
