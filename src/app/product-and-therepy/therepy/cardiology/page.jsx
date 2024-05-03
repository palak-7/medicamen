import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="text-3xl font-bold text-center mb-2">CARDIOLOGY</h1>
      <div className="text-center">
        <h1 className="text-2xl">
          The modern lifestyle has promoted a new array of cardiovascular risk
          factors
        </h1>
        <div className="flex">
          <p className=" text-justify mx-20 mt-20 w-1/2">
            Cardiology is a branch of medicine dealing with disorders of the
            heart as well as parts of circulatory system. It includes treatment
            of congenital heart defects, coronary artery disease, heart failure,
            valvular heart disease and electrophysiology.
            <br />
            <br />
            Heart diseases are a growing concern globally and remain the number
            one cause of death worldwide. Our mission is to deliver medicines
            that make a real difference in quality of life for patients with
            metabolic diseases and at cardiovascular risk.
          </p>
          <div className="flex justify-center mt-10 bg-secondary/60 p-10 mr-10">
            <div className="">
              <div className="flex justify-center">
                <Image
                  src="/product-and-therepy/therepy/cardiology_img.png"
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
