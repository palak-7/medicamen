import React from "react";
import Image from "next/image";
const ChairmanWords = () => {
  return (
    <div className="">
      <div className="lg:flex lg:m-20 m-10 justify-center">
        <Image src="/chairman.png" width={400} height={400} alt="" />
        <div className="bg-primary lg:w-1/2">
          <h2 className="font-bold text-white lg:text-2xl lg:px-10 px-4 lg:pt-10 pt-4 pb-1 leading-normal">
            &quot;MEDICAMEN HAS EMBARKED UPON A NEW AND EXCITING PHASE OF ITS
            GROWTH JOURNEY. MEDICAMEN HAS PROVED ITS TECHNICAL EXCELLENCE BY
            DEVELOPING COMPLEX AND CHALLENGING FORMULATION TECHNOLOGIES. WE ARE
            COMMITTED TO THE PURSUIT OF EXCELLENCE IN BUSINESS AND
            SOCIETY.&quot;
          </h2>
          <p className="text-white lg:px-10 px-4">
            - RAHUL BISHNOI Chairman, Medicamen Biotech
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanWords;
