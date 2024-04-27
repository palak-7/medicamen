import React from "react";
import Link from "next/link";
import Image from "next/image";
const Offering = () => {
  const data = [
    {
      id: 1,
      name: "CANCER CARE",
      description:
        "Cancer care refers to the medical treatment, management, and support provided to individuals diagnosed with cancer.",
      image: "/features/feature--1.png",
    },
    {
      id: 2,
      name: "CARDIOLOGY",
      description:
        "Cardiology is the branch of medicine that deals with the diagnosis and treatment of heart-related diseases and disorders.",
      image: "/features/feature--2.png",
    },
    {
      id: 3,
      name: "CNS",
      description:
        "CNS (Central Nervous System): The CNS is a crucial part of the nervous system that includes the brain and spinal cord.",
      image: "/features/feature--3.png",
    },
    {
      id: 4,
      name: "DIABETOLOGY",
      description:
        "Diabetology is the specialized field of medicine that focuses on the study, diagnosis, and management of diabetes mellitus.",
      image: "/features/feature--4.png",
    },
    {
      id: 5,
      name: "ANTI-MALARIAL",
      description:
        "Anti-malarials are drugs used to prevent and treat malaria, a mosquito-borne infectious disease caused by Plasmodium parasites.",
      image: "/features/feature--5.png",
    },
    {
      id: 6,
      name: "VITAMINS",
      description:
        "Vitamins are organic compounds that are essential for the proper functioning of the body. They play crucial roles in various ...",
      image: "/features/feature--6.png",
    },
    {
      id: 7,
      name: "ANTIBIOTICS",
      description:
        "Antibiotics are a class of medications used to treat bacterial infections. They work by killing or inhibiting the growth of bacteria...",
      image: "/features/feature-7.png",
    },
    {
      id: 8,
      name: "PAIN",
      description:
        "Pain is an unpleasant sensory and emotional experience associated with actual or potential tissue damage.",
      image: "/features/feature-8.png",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="font-bold mx-auto flex justify-center text-4xl mt-10">
          Offerings
        </h1>
        <p className=" mx-52 mt-4 flex justify-center text-center">
          Committed to providing solutions to the pharmaceutical industry across
          the value chain Over the last decade, Medicamen has emerged as an
          integrated Pharmaceutical and Life Sciences Solution Provider offering
          products & services to its customers across the world.
        </p>
      </div>
      <div className="grid grid-cols-4">
        {data.map((item) => (
          <Link
            key={item.id}
            href="/"
            className="hover:scale-105 block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <Image src={item.image} width={90} height={90} alt="offeringImg" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </Link>
        ))}
        {/* <Link
          href="/"
          className="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <Image src="/features/" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Link>
        <Link
          href="/"
          className="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Link>
        <Link
          href="/"
          className="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Link>
        <Link
          href="/"
          className="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Link>
        <Link
          href="/"
          className="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Link> */}
      </div>
    </div>
  );
};

export default Offering;
