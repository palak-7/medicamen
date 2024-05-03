import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[200px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="text-3xl font-bold text-center">AWARDS & RECOGNITIONS</h1>
      <div className="grid grid-cols-15 mt-10 gap-4">
        <div className="col-start-3 col-span-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Image
            className="rounded-t-lg w-[400px]"
            src="/awards/award1.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              EXCELLENCE EXPORTS AWARD
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Medicamen Biotech Limited received export Award from HON’BLE Shri
              Pranab Mukherjee, President of India.
            </p>
          </div>
        </div>
        <div className="col-start-6 col-span-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Image
            className="rounded-t-lg w-[400px]"
            src="/awards/award2.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              NIRYAT SHREE GOLD AWARD
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Medicamen Biotech Limited received –”NIRYAT SHREE” Gold Trophy
              Award from Ministry of state for commerce & industry, Govt. of
              India for excellence in exports.
            </p>
          </div>
        </div>
        <div className="col-start-9 col-span-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Image
            className="rounded-t-lg w-[400px]"
            src="/awards/award3.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              PHARMACEUTICAL EXPORT AWARD
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Medicamen Biotech Limited received the award for excellence in
              Pharmaceutical export from Sh. Ashok Gehlot, Hon’ble Chief
              Minister, Govt. of Rajasthan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
