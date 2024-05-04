import React from "react";
import { data } from "./careers";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Career = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="font-bold text-3xl text-center m-5">CAREER</h1>
      {data.map((d) => (
        <div
          key={d.id}
          className="border border-gray-400 p-4 m-10 lg:flex hover:shadow-xl"
        >
          <Image
            src={`/career/${d.image}`}
            width={200}
            height={100}
            className="w-[200px]"
          />
          <div className="lg:ml-10">
            <div className="font-bold text-xl">{d.post}</div>
            <div className="flex my-2">
              <div className="flex mr-5">
                <FaClock className="mt-1 mr-1" />
                <div>
                  <strong>Start Date:</strong> {d.startDate}
                </div>
              </div>
              <div className="flex">
                <FaClock className="mt-1 mr-1" />
                <div>
                  <strong>End Date:</strong> {d.endDate}
                </div>
              </div>
            </div>
            <div className="my-2">
              <strong>Address:</strong> {d.address}
            </div>
            <Link href={`career/${d.id}`}>
              <div className="bg-primary w-1/2 p-2 flex text-white my-2 hover:bg-primary/80 hover:cursor-pointer">
                <div>Read More</div>
                <FaArrowRight className="mt-1 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career;
