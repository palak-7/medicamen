import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="text-3xl font-bold text-center mb-5">API Dahej Plant</h1>
      <div className="text-center">
        <p className="">
          <strong>Location:</strong> Gujarat <strong>Plant Area: </strong>538195
          Sqft.
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
              Site area of 50,000 Sq. meter including all production blocks,
              buildings, utilities
            </li>
            <li>
              Design complaint with best-in-class regulatory requirements (US,
              Europe, Japan).
            </li>
            <li>4 oncology & 4 other generic blocks planned.</li>
            <li>Robust GMP compliant containment facility.</li>
            <li>
              Fully equipped in-house quality control laboratory for chemical &
              microbiological testing
            </li>
          </ul>
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
            <h1 className="text-2xl font-bold">Reaction capabilities</h1>

            <ul className=" list-disc">
              <li>
                Catalytic hydrogenation, Organoborane chemistry, Chiral
                synthesis & resolution, Grignard reaction, Acylation &
                Alkylation, Carbon homologation, Coupling reaction (Amide
                metal/catalysed), Amination (Reductive/Chiral), Nitration,
                Diazotisation, Reduction, Halogenation, Cyanation, etc
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-secondary p-10 text-white">
        <div className="flex">
          <Image
            src="/infrastructure/well-developed.jpg"
            width={300}
            height={300}
          />
          <div className="ml-10 mt-10">
            <h1 className="text-2xl font-bold">
              Zero affluent discharge facility
            </h1>

            <ul className=" list-disc">
              <li>
                Catalytic hydrogenation, Organoborane chemistry, Chiral
                synthesis & resolution, Grignard reaction, Acylation &
                Alkylation, Carbon homologation, Coupling reaction (Amide
                metal/catalysed), Amination (Reductive/Chiral), Nitration,
                Diazotisation, Reduction, Halogenation, Cyanation, etc
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
