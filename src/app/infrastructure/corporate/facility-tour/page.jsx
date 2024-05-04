import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-2">Facility Tour</h1>
      <p className="text-center mb-10 mx-3 lg:mx-28">
        Medicamen competitive advantage as a Manufacture stems from its
        world-class facilities. INDIA&apos;s fastest growing Generic and
        Speciality Pharmaceutical Company.
      </p>
      <div className="flex justify-center">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
          frameborder="0"
          height="515"
          src="https://www.youtube.com/embed/FxRp9Nca6vY?si=xJFEBeMHT7f3B-KU"
          width="860"
          className="lg:h-[315px] lg:w-[560px] h-[200px] w-[250px] mx-10 mb-10"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
