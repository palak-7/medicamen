import React from "react";
import Image from "next/image";
import { leadership } from "../leadership";
const page = ({ params }) => {
  const id = params.id;
  const obj = leadership.find((item) => item.id == id);
  return (
    <div
      id="container"
      className="overflow-x-clip lg:mt-[30px] md:mt-[110px] sm:mt-[120px] mt-[120px] p-20 w-auto flex px-24 justify-center relative"
    >
      <div
        id="container"
        className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative"
      >
        <div className="mr-10">
          <Image
            className="rounded-lg w-[400px]"
            src={obj.img}
            alt="image of myself"
            width={400}
            height={100}
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className=" font-bold text-3xl">{obj.name}</h1>
          <p className="text-gray-700 mb-8">- {obj.post}</p>

          <p className=" w-full mb-10">{obj.content}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
