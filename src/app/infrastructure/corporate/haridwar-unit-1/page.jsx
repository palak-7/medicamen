import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-5">Haridwar Unit-I</h1>
      <div className="text-center">
        <h1 className="text-2xl mt-5">Formulation (FDF )Plant Unit I</h1>
        <p className="">
          <strong>Location:</strong> Haridwar (Unit-I){" "}
          <strong>Plant Area: </strong>32000 Sqft.
        </p>
      </div>
      {/* key highlights */}
      <div className="bg-secondary text-white p-4 rounded-xl mx-5 lg:mx-44 shadow-xl mt-10">
        <h1 className="text-4xl font-serif font-bold text-center mb-3">
          Key Highlights
        </h1>
        <p>
          Built up on 2,000 square meter area, this facility has a General Block
          with covered area of 32,000 square feet wherein following Category of
          Finished Dosage Forms are manufactured:
        </p>
      </div>
      {/* products */}
      <div className="grid lg:grid-cols-3 mt-10">
        <div className="mx-auto">
          <h1 className="font-semibold text-2xl">Tablets</h1>
          <Image
            src="/infrastructure/Tablets.jpg"
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className="mx-auto">
          <h1 className="font-semibold text-2xl">Ointments</h1>
          <Image
            src="/infrastructure/Ointments.jpg"
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className="mx-auto">
          <h1 className="font-semibold text-2xl">Liquids</h1>
          <Image
            src="/infrastructure/Liquid.jpg"
            width={250}
            height={250}
            alt=""
          />
        </div>
      </div>
      {/* lab descriptions */}
      <div className="flex justify-center mt-10 bg-secondary p-10 text-white">
        <div className="lg:flex">
          <Image
            src="/infrastructure/GeneralBlock.jpg"
            width={300}
            height={300}
            alt=""
          />
          <div className="ml-10 mt-10">
            <h1 className="text-2xl font-bold">General Block</h1>
            <ul className=" list-disc">
              <li>
                One Granulation suit for manufacturing of 250 kg capacity in one
                lot ( 600 liter RMG )
              </li>
              <li>3 Compression Machines</li>
              <li>
                3000-liter capacity Closed-Loop Liquid Manufacturing Plant
              </li>
              <li>
                6 Head Rotary Bottle Filling Machine with 90 bottles per minute
                capacity
              </li>
              <li>300 kg closed-loop Ointment Manufacturing Plan</li>
              <li>
                Combo filling machine (Laminated and Aluminum Tubes) 90 tubes /
                minute capacity.
              </li>
              <li>4 Blister / Strip packing lines</li>
              <li>
                Separate area in Warehouse for Starting Materials, Packing
                Materials and Finished Goods.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex bg-secondary px-10 pb-10 text-white">
        <div className="lg:flex lg:ml-32">
          <Image
            src="/infrastructure/well-developed.jpg"
            width={300}
            height={300}
            alt=""
          />
          <div className="ml-10 mt-10">
            <h1 className="text-2xl font-bold">Well-developed QC lab</h1>
            <ul className=" list-disc">
              <li>Chemical Analysis</li>
              <li>Instrumental Analysis</li>
              <li>Microbiological Lab</li>
              <li>Stability Studies area</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
