import React from "react";
import Image from "next/image";
import Link from "next/link";
import { leadership } from "./leadership";
const page = () => {
  return (
    <div className="relative overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="font-bold text-4xl text-center pt-5">LEADERSHIP & TEAM</h1>
      <div className="grid lg:grid-cols-2 gap-y-10 mx-20 mt-10">
        {leadership.map((l) => (
          <Link
            href={`/${l.link}`}
            className="lg:flex bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:scale-105 hover:cursor-pointer md:max-w-xl hover:bg-gray-100"
          >
            <Image
              className="object-cover md:h-auto md:w-[280px] rounded-t-lg md:rounded-none md:rounded-s-lg"
              src={l.img}
              alt=""
              width={280}
              height={200}
            />
            <div className="flex flex-col justify-between leading-normal">
              <div className="bg-primary text-center p-2">
                <h5 className="text-white text-2xl font-bold tracking-tight">
                  {l.name}
                </h5>
                <p className="text-white mb-2">{l.post}</p>
              </div>
              <p className="mb-3 font-normal text-gray-700 line-clamp-6 p-5">
                {l.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
