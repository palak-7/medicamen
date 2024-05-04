import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="relative overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="font-bold text-4xl text-center pt-5">
        CHAIRMAN&apos;S DESK
      </h1>
      <div className="mt-10">
        <h1 className="absolute mt-10 left-0 z-30 w-full text-white text-center font-bold font-serif leading-normal text-xl lg:text-4xl p-4 px-10">
          Our people are our assets and their welfare is our responsibility. The
          promise of Caring, Sharing, Growing is an integral part of the New
          Medicamen. New Way of thinking
        </h1>

        <div className="absolute top-25 left-0 w-full h-[300px] bg-primary opacity-50 z-20"></div>
        <Image
          src="/bannerImg.jpg"
          width={1000}
          height={300}
          className="w-full h-[300px] object-cover"
          alt=""
        />
      </div>
      <div className="lg:grid grid-cols-4 gap-x-4">
        <div className="col-span-3 px-4 lg:pl-20 pt-10">
          <div className=" font-semibold">
            We, at MEDICAMEN, strive to constantly re-align our strategies
            towards providing high quality, yet affordable, healthcare to
            patients world over. We also perceive opportunities for introducing
            quality medicines, in both Oncology & Non-Oncology categories, into
            highly regulated markets of EU, US, Japan, Australia etcetera to
            enable them reduce their healthcare costs.
          </div>
          <br />
          <div>
            Transformation requires a relentless focus in all areas of business.
            We applied this focus to identify potential growth opportunities. We
            identified our internal capabilities and re-strategized our business
            priorities to transform MBL.
          </div>
          <br />
          <div>
            Large part of our future growth will be driven by our approach
            towards Research & Development and our foray into the oncology
            segment augurs well with our business strategy. We are committed to
            creating value for all stakeholders and building better lives by our
            holistic business approach.
          </div>
        </div>
        <div className="p-10 bg-secondary rounded-xl shadow-lg my-10 mx-3">
          <div className="font-bold mb-3 text-2xl text-white underline">
            Leadership Vision
          </div>
          <h3 className="font-semibold text-white">
            Medicamen Biotech is recognized as a world leader in the production
            of affordable Anti-retroviral drugs besides being known for offering
            high quality medicines across major therapies.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
