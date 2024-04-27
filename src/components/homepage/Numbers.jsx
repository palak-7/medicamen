import React from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import styles from "./styles.css";
import "animate.css";
const Numbers = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-secondary bg-opacity-80"></div>
      <div className="absolute inset-0 grid grid-cols-4">
        <div className="max-w-sm p-6 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse">
          <FaTrophy className="text-white h-20 w-20 mx-auto" />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
            100
          </h5>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
            PROJECTS
          </h5>
        </div>
        <div class="max-w-sm p-6 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse">
          <FaShieldAlt className="text-white h-20 w-20 mx-auto" />
          <h5 class="mb-2 text-2xl mt-2 font-semibold tracking-tight text-white text-center">
            40
          </h5>
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
            PIPELINE PRODUCTS
          </h5>
        </div>
        <div class="max-w-sm p-6 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse">
          <FaUsers className="text-white h-20 w-20 mx-auto" />
          <h5 class="mb-2 text-2xl mt-2 font-semibold tracking-tight text-white text-center">
            600
          </h5>
          <h5 class="mb-2 text-2xl mt-2 font-semibold tracking-tight text-white text-center">
            EMPLOYEES
          </h5>
        </div>
        <div
          className={`max-w-sm p-6 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse`}
        >
          <IoBarChartSharp className="text-white h-20 w-20 mx-auto" />
          <h5 className="mb-2 text-2xl mt-2 font-semibold tracking-tight text-white text-center">
            4
          </h5>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
            MANUFACTURING
          </h5>
        </div>
      </div>

      <Image
        src="/counter.jpg"
        width={1000}
        height={1000}
        className="h-[350px] w-full"
        alt="numbersImg"
      />
    </div>
  );
};

export default Numbers;
