import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-2">PAIN MANAGEMENT</h1>
      <div className="text-center">
        <h1 className="text-2xl">
          Nurturing Innovation to improve quality of patient’s life
        </h1>
        <div className="lg:flex">
          <p className=" text-justify lg:mx-20 mx-5 mt-10 lg:mt-20 lg:w-1/2">
            Pain is one of the most significant healthcare problems we face
            today and impacts hundreds of millions of people across the world.
            Pain management, is a branch of medicine employing an
            inter-disciplinary approach for easing the suffering and improving
            the quality of life of those living with chronic pain.
            <br />
            <br />
            Medicamen is working hard to address this global challenge, and to
            bring back a measure of quality to the lives of those patients
            living with pain.
            <br />
            <br />
            Our Research team is developing a focused portfolio of solutions
            that looks across the spectrum of pain states, including chronic
            nociceptive pain, cancer pain, chronic neuropathic pain and
            migraine.
          </p>
          <div className="flex justify-center mt-10 bg-secondary/60 p-10 lg:mr-10">
            <div className="">
              <div className="flex justify-center">
                <Image
                  src="/product-and-therepy/therepy/Pain.png"
                  height={300}
                  width={300}
                  alt=""
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
