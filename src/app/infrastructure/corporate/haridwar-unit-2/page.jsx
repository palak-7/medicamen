import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="text-3xl font-bold text-center mb-5">Haridwar Unit-II</h1>
      <div className="text-center">
        <h1 className="text-2xl mt-5">Oncology Facility</h1>
        <p className="">
          <strong>Location:</strong> Haridwar (Unit-II){" "}
          <strong>Plant Area: </strong>35000 Sqft.
        </p>
      </div>
      {/* key highlights */}
      <div className="bg-secondary text-white p-4 rounded-xl mx-44 shadow-xl mt-10">
        <h1 className="text-4xl font-serif font-bold text-center mb-3">
          Key Highlights
        </h1>
        <p className="text-center">
          State-of-the-art US-FDA compliant oncology plant at Haridwar (India).
          Rollout of globally oncology formulations.
        </p>
      </div>
      {/* lab descriptions */}
      <div className="flex justify-center mt-10 bg-secondary p-10 text-white">
        <div className="flex">
          <Image
            src="/infrastructure/GeneralBlock.jpg"
            width={300}
            height={300}
          />
          <div className="ml-10 mt-10">
            <h1 className="text-2xl font-bold">
              Capacity of Oncology Facility
            </h1>
            <h3 className="font-semibold underline mt-3">
              Oral Solid Dose (OSD) Section
            </h3>
            <ul className=" list-disc">
              <li>
                Integrated Granulation line (Glatt , 30 Kg capacity) with WIP
                technology & interchangeable bowl size.
              </li>
              <li>Tablet compression & encapsulation with Isolators</li>
              <li>Tablet coater with WIP technology (Glatt)</li>
              <li>Tablet formulation capacity - 140 million per annum.</li>
              <li>Capsules capacity- 4.5 million per annum.</li>
            </ul>
            <h3 className="font-semibold underline mt-3">Injectable Section</h3>
            <ul className=" list-disc">
              <li>Lyophilized vials capacity - 2 to 2.25 million per annum.</li>
              <li>RTU vials capacity - 5 to 5.55 million per annum.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
