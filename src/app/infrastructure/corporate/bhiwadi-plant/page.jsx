import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-5">BHIWADI PLANT</h1>
      <div className="flex justify-center m-3 lg:m-0">
        <Image
          src="/BhiwadiPlant.png"
          width={1000}
          height={100}
          className="h-[200px] lg:h-[100px]"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl mt-5">Finish Dosage Forms Generics</h1>
        <p className="">
          <strong>Location:</strong> Bhiwadi (Rajasthan, India){" "}
          <strong>Plant Area: </strong>2,10,000 Sqft.
        </p>
      </div>
      <div className="m-10 grid lg:grid-cols-3 gap-4">
        <div>
          <h1 className="text-xl font-semibold">BLOCK 1</h1>
          <h3 className="text-lg font-semibold">Beta Lactam OSD block</h3>
          <ul className="list-disc">
            <li>Tablets</li>
            <li>Capsules</li>
            <li>Powder for Suspension(Dry Syrups)</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">BLOCK 2</h1>
          <h3 className="text-lg font-semibold">Non Beta Lactam OSD block</h3>
          <ul className="list-disc">
            <li>Tablets</li>
            <li>Capsules</li>
            <li>Powder for Suspension(Dry Syrups)</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">BLOCK 3</h1>
          <h3 className="text-lg font-semibold">Liquid Orals block</h3>
          <ul className="list-disc">
            <li>ORS & Liquid Orals</li>
            <li>Two lines of liquid oral manufacturing</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">BLOCK 4</h1>
          <h3 className="text-lg font-semibold">Iron & Folic Acid Block</h3>
          <ul className="list-disc">
            <li>
              Dedicated to manufacturing of Iron tablets and its combinations.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">BLOCK 5</h1>
          <h3 className="text-lg font-semibold">R & D Block</h3>
          <ul className="list-disc">
            <li>Formulation Development</li>
            <li>Analytical and chemical research development</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">BLOCK 6</h1>
          <h3 className="text-lg font-semibold">Iron & Folic Acid Block</h3>
          <ul className="list-disc">
            <li>
              Dedicated to manufacturing of Iron tablets and its combinations.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary text-white p-4 rounded-xl lg:mx-44 m-5 shadow-xl">
        <h1 className="text-4xl font-serif font-bold text-center mb-3">
          Key Highlights
        </h1>
        <p>
          Bhiwadi facility is built on a sprawling area of 20,625 square meters
          and is well designed conforming to ccGMP Standards. Entire layout of
          the facility is based on modern architecture comprising 6 separate
          blocks collectively having 2,10,000 square feet of covered area.
        </p>
      </div>
    </div>
  );
};

export default page;
