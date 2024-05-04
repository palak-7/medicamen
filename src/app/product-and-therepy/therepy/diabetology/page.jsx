import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-2">DIABETOLOGY</h1>
      <div className="text-center">
        <h1 className="text-2xl">
          Helping to Reduce Health Disparities in Diabetes
        </h1>
        <div className="lg:flex">
          <p className=" text-justify mx-5 lg:mx-20 mt-10 lg:mt-20 lg:w-1/2">
            Diabetes is a group of metabolic disorders in which there are high
            blood sugar levels over a prolong period. This could be due to the
            lack of hormonal insulin or because the insulin that is available in
            the body is not working effectively.
            <br />
            <br />
            With the prevalence of diabetes continuing to grow in many
            countries, it is one of the most serious chronic health challenges
            we face today. Medicamen is dedicated in playing a noteworthy role
            in providing diabetes treatment to patients across various sections
            of the society.
            <br />
            <br />
            We’re pursuing leading, distinctive science in diabetes with the
            goal of developing life-changing medicines that focus on better
            management of this disease.
          </p>
          <div className="flex justify-center mt-10 bg-secondary/60 p-10 lg:mr-10">
            <div className="">
              <div className="flex justify-center">
                <Image
                  src="/product-and-therepy/therepy/diabetology.png"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-semibold text-center mt-5 text-lg">
        For more information on products, please click on the link below:
      </p>
      <div className="flex justify-center mt-2">
        <Link
          href="/"
          className="bg-primary hover:bg-primary/90 text-white p-3 flex w-28"
        >
          <button>Products</button>
          <MdKeyboardDoubleArrowRight className="mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default page;
