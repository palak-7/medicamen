import React from "react";
import { data } from "./careers";
import Image from "next/image";
const Career = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="font-bold text-3xl text-center m-5">CAREER</h1>
      {data.map((d) => (
        <div key={d.id}>
          <Image src={`/career/${d.image}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default Career;
