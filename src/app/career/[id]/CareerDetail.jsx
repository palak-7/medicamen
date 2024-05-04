import React from "react";
import Image from "next/image";
import { data } from "../careers";
import { FaPlay } from "react-icons/fa";
import { GrFlagFill } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const CareerDetail = ({ id }) => {
  const obj = data.find((item) => item.id == id);
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="font-bold text-3xl text-center m-5">{obj.post}</h1>
      <div className="grid lg:grid-cols-3 gap-x-10 m-10">
        <div className="bg-primary text-white p-4 shadow-lg hover:shadow-2xl hover:bg-primary/10 hover:text-black">
          <div className="flex my-2 justify-center">
            <FaPlay className="w-[50px] h-[50px]" />
          </div>
          <div className="text-center font-bold text-xl">Start Date</div>
          <div className="text-center">{obj.startDate}</div>
        </div>
        <div className="bg-primary mt-4 lg:mt-0 text-white p-4 hover:shadow-2xl hover:bg-primary/10 hover:text-black">
          <div className="flex my-2 justify-center">
            <GrFlagFill className="w-[50px] h-[50px]" />
          </div>
          <div className="text-center font-bold text-xl">End Date</div>
          <div className="text-center">{obj.endDate}</div>
        </div>
        <div className="bg-primary mt-4 lg:mt-0 text-white p-4 hover:shadow-2xl hover:bg-primary/10 hover:text-black">
          <div className="flex my-2 justify-center">
            <IoLocationSharp className="w-[50px] h-[50px]" />
          </div>
          <div className="text-center font-bold text-xl">Address</div>
          <div className="text-center">{obj.address}</div>
        </div>
      </div>
      <div className="lg:grid grid-cols-4 gap-x-10 m-10">
        <div className="col-start-2 col-span-1 bg-primary text-white p-4 hover:shadow-2xl hover:bg-primary/10 hover:text-black">
          <div className="flex my-2 justify-center">
            <FaBuilding className="w-[50px] h-[50px]" />
          </div>
          <div className="text-center font-bold text-xl">Department</div>
          <div className="text-center">{obj.department}</div>
        </div>
        <div className="col-start-3 mt-4 lg:mt-0 col-span-1 bg-primary text-white p-4 hover:shadow-2xl hover:bg-primary/10 hover:text-black">
          <div className="flex my-2 justify-center">
            <IoPeopleSharp className="w-[50px] h-[50px]" />
          </div>
          <div className="text-center font-bold text-xl">No. of Position</div>
          <div className="text-center">{obj.position}</div>
        </div>
      </div>
      {/* description */}
      <div className="ml-5">
        <h1 className="font-bold text-xl">Job Description</h1>
        <p dangerouslySetInnerHTML={{ __html: obj?.responsibility }}></p>
      </div>
      {/* profile */}
      <div className="ml-5 mt-5">
        <h1 className="font-bold text-xl">Desired Candidate Profile</h1>
        <p dangerouslySetInnerHTML={{ __html: obj?.profile }}></p>
      </div>
    </div>
  );
};

export default CareerDetail;
