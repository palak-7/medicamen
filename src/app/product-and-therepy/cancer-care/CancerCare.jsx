"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cancerCare } from "../product";

const CancerCare = () => {
  const [filter, setFilter] = useState("all");
  const [updated, setUpdated] = useState(cancerCare);

  const allClicked = () => {
    setFilter("all");
    setUpdated(cancerCare);
  };

  const oralClicked = () => {
    setFilter("oral");
    setUpdated(cancerCare.filter((item) => item.cat === "oral"));
  };
  const hemaClicked = () => {
    setFilter("hematology");
    setUpdated(cancerCare.filter((item) => item.cat2 === "hematology"));
  };
  const solidClicked = () => {
    setFilter("solid");
    setUpdated(cancerCare.filter((item) => item.cat2 === "solid"));
  };

  const injectablesClicked = () => {
    setFilter("injectables");
    setUpdated(cancerCare.filter((item) => item.cat === "inject"));
  };

  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-2">Cancer Care</h1>
      <div className="text-center">
        <h1 className="text-2xl">
          We create experiences that transform brands, grow businesses and make
          people’s lives better
        </h1>
        <div className="lg:flex">
          <p className=" text-justify mx-5 lg:mx-20 mt-10 lg:w-1/2">
            Cancer is the disease which is characterized by uncontrolled cell
            growth and in some cases it may metastasize (spread to the body).
            Cancer is the deadliest disease and this requires immediate
            attention of doctor. Despite of availability of number of anticancer
            drugs (oncology drugs) available for cancer cure, still much more is
            needed to be discovered. <br />
            <br />
            Over the years, Medicamen has been building a global franchise of
            products both in APIs and finished dosages. The company is coming up
            with a dedicated state-of-the-art manufacturing facility based out
            of Haridwar, India producing affordable anti-cancer drugs in
            Tablets, Capsules, Injectible including Lyophilized. Lyophilization
            is a process that extracts water from drug particles at the freezing
            temperature maintaining the drug value intact.
            <br />
            <br /> At Medicamen, we aim at bringing a wide basket of anti-cancer
            products at affordable prices to besides positively impacting the
            lives of millions of cancer patients in terms of health and economic
            aspects.
          </p>
          <div className="flex justify-center mt-10 bg-secondary/60 p-10 lg:mr-10">
            <div className="">
              <h1 className="font-bold text-3xl mb-5">
                NEW ONCOLOGY PLANT, HARIDWAR
              </h1>
              <div className="flex justify-center">
                <Image
                  src="/product-and-therepy/therepy/HARIDWAR.jpg"
                  height={300}
                  width={300}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cancer terms */}
      <div className="grid lg:grid-cols-3 m-5 lg:m-20 gap-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl">
          <Image
            className="rounded-t-lg w-full h-[250px]"
            src="/product-and-therepy/therepy/Haematology_th.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              HAEMATOLOGY
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Haematology is the science or study of blood, blood-forming organs
              and blood diseases. In the medical field, haematology includes the
              treatment of blood disorders and malignancies, including types of
              haemophilia, leukaemia, lymphoma and sickle-cell anaemia.
              Haematology is a branch of internal medicine that deals with the
              physiology, pathology, etiology, diagnosis, treatment, prognosis
              and prevention of blood-related disorders.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl">
          <Image
            className="rounded-t-lg w-full h-[250px]"
            src="/product-and-therepy/therepy/SolidTumor.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              SOLID TUMOR
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              A tumor is an abnormal clump of cells. When your child has a solid
              tumor, that means the tumor doesn&apos;t contain any liquid or
              cysts. Solid tumors can develop in the muscles, bone, and organs
              of the body. Examples include mesothelioma, sarcomas, lymphomas,
              sarcomas as well as cancers of the breast, prostate, kidney,
              ovaries, pancreas, thyroid, and colon. Not all tumors are cancer.
              A tumor that does not have any cancer cells is called benign. A
              tumor with cancer cells is called malignant.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl">
          <Image
            className="rounded-t-lg w-full h-[250px]"
            src="/product-and-therepy/therepy/Supportive.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              SUPPORTIVE CARE
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Supportive care given to improve the quality of life of patients
              who have a serious or life-threatening disease. The goal of
              supportive care is to prevent or treat as early as possible the
              symptoms of a disease, side effects caused by treatment of a
              disease, and psychological, social, and spiritual problems related
              to a disease or its treatment. Also called comfort care,
              palliative care, and symptom management.
            </p>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="text-center">
        <h1 className="font-bold text-3xl">HAEMATOLOGY</h1>
        <h3 className="font-semibold text-xl">Blood Cancer</h3>
        <h4 className="font-semibold mt-5 lg:mx-0 mx-4">
          Blood cancer is an umbrella term for cancers that affect the blood,
          bone marrow and lymphatic system. There are three main types of blood
          cancer:
        </h4>
        <ul className=" list-disc text-left mx-10 lg:mx-20 mt-5 leading-loose">
          <li>
            <strong>Leukaemia:</strong>
            Leukaemia, a type of cancer found in your blood and bone marrow, is
            caused by the rapid production of abnormal white blood cells. The
            high number of abnormal white blood cells are not able to fight
            infection, and they impair the ability of the bone marrow to produce
            red blood cells and platelets.
          </li>
          <li>
            <strong>Lymphoma:</strong>
            Lymphoma is a type of blood cancer that affects the lymphatic
            system, which removes excess fluids from your body and produces
            immune cells. Lymphocytes are a type of white blood cell that fight
            infection. Abnormal lymphocytes become lymphoma cells, which
            multiply and collect in your lymph nodes and other tissues. Over
            time, these cancerous cells impair your immune system.
          </li>
          <li>
            <strong>Myeloma:</strong>
            Myeloma is a cancer of the plasma cells. Plasma cells are white
            blood cells that produce disease- and infection-fighting antibodies
            in your body. Myeloma cells prevent the normal production of
            antibodies, leaving your body&apos;s immune system weakened and
            susceptible to infection.
          </li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl">SOLID TUMOR</h1>
        <h3 className="font-semibold text-xl">Major types of solid tumors</h3>
        <h4 className="font-semibold mt-5">
          Two major types of solid tumors are sarcomas and carcinomas. Many
          types of solid tumors, whether a sarcoma or a carcinoma, are often
          treated with surgery.
        </h4>
        <ul className=" list-disc text-left mx-10 lg:mx-20 mt-5 leading-loose">
          <li>
            <strong>Sarcomas :</strong>
            Sarcomas are tumors in a blood vessel, bone, fat tissue, ligament,
            lymph vessel, muscle or tendon.
          </li>
          <li>
            <strong>Carcinomas :</strong>
            Carcinomas are tumors that form in epithelial cells. Epithelial
            cells are found in the skin, glands and the linings of organs. Those
            organs includes the bladder, ureters and part of the kidneys.
          </li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold text-center my-5 mb-5">Our Products</h1>
      <div className="flex justify-center">
        <div className="col-span-2 flex">
          <button
            onClick={allClicked}
            className={`bg-primary hover:bg-primary/90 hover:scale-105 text-white rounded-2xl px-3 py-1 m-3 ${
              filter === "all" && "border-green-300 border-4"
            }`}
          >
            All
          </button>
          <button
            onClick={injectablesClicked}
            className={`bg-primary hover:bg-primary/90 hover:scale-105 text-white rounded-2xl px-3 py-1 m-3 ${
              filter === "injectables" && "border-green-300 border-4"
            }`}
          >
            Injectables
          </button>
          <button
            onClick={oralClicked}
            className={`bg-primary hover:bg-primary/90 hover:scale-105 text-white rounded-2xl px-3 py-1 m-3 ${
              filter === "oral" && "border-green-300 border-4"
            }`}
          >
            Oral
          </button>
          <button
            onClick={hemaClicked}
            className={`bg-primary hover:bg-primary/90 hover:scale-105 text-white rounded-2xl px-3 py-1 m-3 ${
              filter === "hematology" && "border-green-300 border-4"
            }`}
          >
            Hematology
          </button>
          <button
            onClick={solidClicked}
            className={`bg-primary hover:bg-primary/90 hover:scale-105 text-white rounded-2xl px-3 py-1 m-3 ${
              filter === "solid" && "border-green-300 border-4"
            }`}
          >
            Solid Tumors
          </button>
        </div>
      </div>
      <div className="mx-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SNo.
              </th>
              <th scope="col" className="px-6 py-3">
                Brand Name
              </th>
              <th scope="col" className="px-6 py-3">
                Generic
              </th>
              <th scope="col" className="px-6 py-3">
                Packing
              </th>
            </tr>
          </thead>
          <tbody>
            {updated.map((c, index) => (
              <tr
                key={c.SNo}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{c.BrandName}</td>
                <td className="px-6 py-4">{c.Generic}</td>
                <td className="px-6 py-4">{c.Packing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CancerCare;
