import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="text-3xl font-bold text-center mb-5">BHIWADI PLANT</h1>
      <div className="flex justify-center">
        <Image src="/BhiwadiPlant.png" width={1000} height={100} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl mt-5">Finish Dosage Forms Generics</h1>
        <p className="">
          <strong>Location:</strong> Bhiwadi (Rajasthan, India){" "}
          <strong>Plant Area: </strong>2,10,000 Sqft.
        </p>
      </div>
      <div className="m-10 grid grid-cols-3">
        <div>
          <h1 className="text-xl font-semibold">BLOCK 1</h1>
          <ul className="list-disc">
            <li>Tablets</li>
            <li>Capsules</li>
            <li>Powder for Suspension(Dry Syrups)</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">BLOCK 2</h1>
          <ul className="list-disc">
            <li>Tablets</li>
            <li>Capsules</li>
            <li>Powder for Suspension(Dry Syrups)</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">BLOCK 3</h1>
          <ul className="list-disc">
            <li>Tablets</li>
            <li>Capsules</li>
            <li>Powder for Suspension(Dry Syrups)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
