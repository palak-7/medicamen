import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="relative overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[200px]">
      <h1 className="font-bold text-4xl text-center pt-5 mb-4">About Us</h1>
      {/* about us */}
      <div className="mx-4 lg:mx-32">
        <p>
          Established in December 1993, Medicamen Group has vertically
          integrated facilities in terms of R&D, APIs & Formulations.
        </p>
        <br />
        <p className="font-semibold">
          The company is now focusing on oncology therapeutics & other generics
          with a vision to be a Global Leader in Oncology generics by offering
          affordable medicine with best-in-class quality.
        </p>
        <br />
        <p>
          Apart from the above, a set of 10 Non-oncology formulations is also
          being determined in R & D for EU market filings. The company has firm
          plans & investments for Global rollout of its oncology Products in
          USA, Europe, Latin America, Asia-Pacific, MENA etc. through a
          combination of own team & alliance partners.
        </p>
      </div>

      {/* cards */}
      <div className="mt-10 ">
        <div className="absolute grid lg:grid-cols-3 grid-cols-1 text-white z-30 gap-x-10">
          <div className="border-white border-2 m-14 p-6 hover:scale-105 hover:bg-black hover:bg-opacity-35">
            <h1 className="font-bold text-3xl text-center mb-2">Our Vision</h1>
            <p className="text-center">
              Committed to transform life of people through quality and
              innovative healthcare solutions and making it accessible to more
              people.
            </p>
          </div>
          <div className="border-white border-2 m-14 p-6 hover:scale-105 hover:bg-black hover:bg-opacity-35">
            <h1 className="font-bold text-3xl text-center mb-2">Quality</h1>
            <p className="text-center">
              We maintain stringent control systems and procedures to ensure
              compliance with CGMP standards.
            </p>
          </div>
          <div className="border-white border-2 m-14 p-6 hover:scale-105 hover:bg-black hover:bg-opacity-35">
            <h1 className="font-bold text-3xl text-center mb-2">INNOVATION</h1>
            <p className="text-center">
              Make courageous choices for agile transformation, with the aim to
              drive efficiency, effectiveness and growth
            </p>
          </div>
        </div>

        <div className="absolute top-25 left-0 w-full lg:h-[300px] h-[1000px] bg-primary opacity-60 z-20"></div>
        <Image
          src="/bannerImg.jpg"
          width={1000}
          height={300}
          className="w-full h-[1000px] lg:h-[300px] object-cover"
          alt=""
        />
      </div>
      {/* infrastructure */}
      <div>
        <h1 className="font-bold text-4xl text-center pt-5 mb-4">
          Infrastructure Highlights
        </h1>
        <div className="grid lg:grid-cols-2 gap-x-4">
          <div className="m-4 bg-secondary/80 text-center p-3 text-white font-semibold rounded-lg shadow-xl">
            R&D Centre approved by Department of Scientific & Industrial
            Research(DSIR), at Bhiwadi, (Rajasthan, India) for carrying out
            Chemical, Analytical and Formulation R&D.
          </div>
          <div className="m-4 bg-secondary/80 text-center p-3 text-white font-semibold rounded-lg shadow-xl">
            A state-of-the-art API manufacturing facility under its parent
            company, Shivalik Rasayan Limited, at Dahej (Gujarat, India)
            conforming to requirements of highly regulated markets having
            separate blocks for oncology and other generics.
          </div>
        </div>
        <div className="text-center m-5">
          <h1 className="font-semibold text-2xl">
            Three manufacturing facilities for Finished Dosage Forms (FDF):
          </h1>
          <div className="grid lg:grid-cols-3 gap-x-4 mt-5">
            <p className="bg-secondary/90 lg:mb-0 mb-4 rounded-full p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold">First Formulation (FDF)</h3>
              facility established in 1993 for General Formulations at Bhiwadi
              (Rajasthan, India). This plant has been audited by an EU member
              country and is soon expected to be an EU-approved facility.
            </p>
            <p className="bg-secondary/90 lg:mb-0 mb-4  rounded-full p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold">Second Formulation(FDF)</h3>{" "}
              facility established in 2007 for General Formulations at Haridwar
              Unit-I (Uttarakhand, India)
            </p>
            <p className="bg-secondary/90 rounded-full p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold">Third FDF</h3> facility
              established in 2021 for Oncology Injectables (Lyo & RTU) and Oral
              Solid Dosage Forms at Haridwar Unit-II (Uttarakhand, India). This
              plant is approvable by leading global regulatory agencies such as
              USFDA, EDQM, PMDA, TGA etc.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-center pt-5 mb-4">
          Medicamen, an innovative way of thinking.
        </h1>
        <div className="lg:w-1/2 mx-4">
          <h3 className="font-semibold text-lg text-center">
            At Medicamen, we are looking at new ways of thinking, new ways of
            working and new ways to touch people&apos;s lives.
          </h3>
          <p className="lg:mx-10 text-center">
            Medicamen follows innovative business models to make the most of
            emerging opportunities. A new drive for growth today permeates every
            mind-set, process and techno-innovation within Medicamen Biotech.
          </p>
          <h3 className="font-semibold text-lg text-center mt-4">
            Trusted Partner
          </h3>
          <p className="lg:mx-10 text-center">
            We build relations that enable us to deliver lasting solutions for
            the benefit of our customers. We are proud to be trusted by our
            customers and suppliers world over.
          </p>
          <h3 className="font-semibold text-lg text-center mt-4">
            Transforming solution
          </h3>
          <p className="lg:mx-10 text-center">
            We strive constantly towards developing Transforming solutions in
            all aspects of our service. We think proactively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
