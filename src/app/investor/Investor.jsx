import React from "react";
import { data } from "./investorData";
import Image from "next/image";
import Link from "next/link";

const Investor = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className=" text-center font-bold text-5xl mt-5">Investors</h1>
      <div className="grid lg:grid-cols-3 lg:m-20 m-5 gap-4">
        {data.map((d) => (
          <div
            key={d.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
            <Image
              className="rounded-t-lg w-full h-[300px]"
              src={d.img}
              alt=""
              width={1000}
              height={100}
            />
            <div className="p-5">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                {d.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{d.post}</p>
            </div>
            <Link href={`/investor/${d?.link}`}>
              <button className="bg-primary hover:bg-primary/90 text-white text-center p-2 w-full">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investor;
