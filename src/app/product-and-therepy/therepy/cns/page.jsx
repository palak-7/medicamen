import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-2">CNS</h1>
      <div className="text-center">
        <h1 className="text-2xl">
          Aiming for the social reintegration of patients with psychiatric and
          neurological disorders
        </h1>
        <div className="lg:flex">
          <p className=" text-justify mx-5 lg:mx-20 mt-10 lg:mt-20 lg:w-1/2">
            Diseases of the central nervous system are also known as psychiatric
            and neurological disorders. Since the causes of and fundamental
            treatments for these conditions have not been fully understood, it
            is a challenge to create new drugs in this area, even for companies
            that have produced innovative medicines in the past.
            <br />
            <br />
            In order to take on the challenge of creating new drugs, a company
            needs not only enthusiasm, passion, and curiosity, but also new
            ideas discovered by taking untrodden paths. As an industry pioneer
            with a venture spirit, Medicamen aims to further assist patients and
            their families by working with global partners in the field of
            central nervous system disorder.
            <br />
            <br />
            Together with them Medicamen is developing innovative drugs for
            psychiatric and neurological disorders, and is taking on the
            challenge of introducing new technologies and new dosage formats to
            ensure reliable medication delivery.
          </p>
          <div className="flex justify-center mt-10 bg-secondary/60 p-10 lg:mr-10">
            <div className="">
              <div className="flex justify-center">
                <Image
                  src="/product-and-therepy/therepy/cns.png"
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
