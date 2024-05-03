import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="text-3xl font-bold text-center mb-5">
        Corporate Research and Development
      </h1>
      <div className="text-center">
        <p className="">
          <strong>Location:</strong>Bhiwadi, Rajasthan{" "}
          <p>
            Approved by Department of Scientific & Industrial Research (DSIR),
            Govt. of India
          </p>
        </p>
      </div>
      {/* key highlights */}
      <div className="bg-secondary text-white p-4 rounded-xl mx-44 shadow-xl mt-10">
        <h1 className="text-4xl font-serif font-bold text-center mb-3">
          Key Highlights
        </h1>
        <p className="ml-10">
          <ul className="list-disc">
            <li>
              Experienced technical team (scientists, pharmacists) with multiple
              developments and patents to its credit
            </li>
            <li>
              Equipped with best-in-class equipment and systems for development
              of complex APIs & formulations
            </li>
            <li>
              Full in-house capabilities for analytical research, stability
              studies, process validation and improvements
            </li>
            <li>A robust quality assurance system for product development</li>
            <li>Para IV filing capability with different API polymorphs</li>
            <li>
              Strong in-house intellectual property management skills and
              expertise
            </li>
            <li>
              Demonstrated technology transfer capabilities and operating
              systems
            </li>
            <li>
              Approved by DSIR (Department of Scientific & Industrial Research),
              Govt of India
            </li>
          </ul>
        </p>
      </div>
      {/* products */}
      <h1 className="text-center text-xl font-semibold mt-10">
        Futuristic, Innovative ideas and high quality products are the core
        strengths of our R & D Team.
      </h1>
      <div className="grid grid-cols-2 mt-10">
        <div className="mx-auto">
          <Image src="/infrastructure/FRD_GEN1.jpg" width={350} height={350} />
        </div>
        <div className="mx-auto">
          <Image
            src="/infrastructure/Banner_RandD2.jpg"
            width={350}
            height={350}
          />
        </div>
      </div>
      {/* capability highpoints */}
      <h1 className="text-center font-bold text-4xl mt-10">
        Capability Highpoints
      </h1>
      <div className="grid grid-cols-3 mt-2">
        <div className="hover:scale-105 block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Research
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We indulge in heavy-duty research before developing a new product
          </p>
        </div>
        <div className="hover:scale-105 block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            API Oncology/ Other Generics
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We indulge in heavy-duty research before developing a new product &
            in the non-oncology segment, we will focus on new generic products
          </p>
        </div>
        <div className="hover:scale-105 block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Analytical Research
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We develop high-quality formulations, maintaining the highest levels
            of compliance
          </p>
        </div>
        <div className="hover:scale-105 block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Quality
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We maintain stringent control systems and procedures to ensure
            compliance with cGMP standards
          </p>
        </div>
        <div className="hover:scale-105 block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Formulation Research
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We develop high-quality formulations, maintaining the highest levels
            of compliance
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
