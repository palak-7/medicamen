import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-5">Quality</h1>
      <div className="text-center">
        <h1 className="text-2xl mt-5">Formulation (FDF )Plant Unit I</h1>
        <p className="">
          <strong>Location:</strong> Haridwar (Unit-I){" "}
          <strong>Plant Area: </strong>32000 Sqft.
        </p>
      </div>
      {/* key highlights */}
      <div className="bg-secondary text-white p-4 rounded-xl mx-4 lg:mx-44 shadow-xl mt-10">
        <h1 className="text-4xl font-serif font-bold text-center mb-3">
          Key Highlights
        </h1>
        <p>
          We maintain stringent control systems and procedures to ensure
          compliance with CGMP standards. We develop innovative and high-quality
          products drawing strength from our R&D team, which is not only
          futuristic in its ideas but also thoughtful towards humanity.
        </p>
      </div>

      {/* lab descriptions */}
      <div className="flex justify-center mt-10 bg-secondary p-10 text-white">
        <div className="lg:flex">
          <Image
            src="/infrastructure/well_developed.jpg"
            width={300}
            height={300}
            alt=""
          />
          <div className="lg:ml-10 mt-10">
            <h1 className="text-2xl font-bold">QUALITY ASSURANCE</h1>
            <p>
              A comprehensive quality assurance programme at every stage of
              procurement, manufacture, packing & distribution ensure that
              products not only meet but also surpass pharmacopoeial
              requirements. Stringent control systems & procedures ensure
              compliance with cGMP standards. Our Quality assurance dept.
              comprise of a separate department IPQA which monitors in process
              controls to assure inbuilt quality in the product.
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-secondary px-10 pb-10 text-white">
        <div className="lg:flex">
          <Image
            src="/infrastructure/QUALITYCONTROL.jpg"
            width={300}
            height={300}
            alt=""
          />
          <div className="lg:ml-10 mt-10">
            <h1 className="text-2xl font-bold">Quality Control</h1>
            <p>
              We ensure the quality of starting and packaging materials by
              following Specifications & Standard Test Procedures. Our Quality
              control dept. is responsible for all sampling & analysis work
              related to raw material, in -process and finished goods validation
              samples & stability samples and aim at carrying out all
              requirements of current Good Laboratory Practices (cGLPs). We
              ensure that the incoming, in-process and final inspection is done
              as per documented procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
