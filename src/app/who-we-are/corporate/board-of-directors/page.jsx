import React from "react";
import Image from "next/image";
import { directors } from "./data";
import Link from "next/link";
const page = () => {
  return (
    <div className="relative overflow-x-clip lg:mt-[200px] md:mt-[110px] sm:mt-[120px] mt-[250px]">
      <h1 className="text-3xl font-bold text-center mx-10 lg:mx-20">
        OUR LEADERSHIP TEAM HAS A CLEAR VISION & PASSION FOR BEING GLOBAL LEADER
        IN ONCOLOGY & OTHER BRANDED GENERICS.
      </h1>
      <div className="grid lg:grid-cols-4 m-20 gap-4">
        {directors.map((d) => (
          <Link
            href={`/who-we-are/corporate/board-of-directors/${d.id}`}
            key={d.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105"
          >
            <Image
              className="rounded-t-lg w-full"
              src={d.img}
              alt=""
              width={1000}
              height={100}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {d.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{d.post}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
