import React from "react";
import Image from "next/image";
const ChairmanWords = () => {
  return (
    <div className="">
      <div className="flex m-20 justify-center">
        <Image src="/chairman.png" width={400} height={400} />
        <div className="bg-primary w-1/2">
          <h2 className="font-bold text-white text-2xl px-10 pt-10 pb-1 leading-normal">
            "MEDICAMEN HAS EMBARKED UPON A NEW AND EXCITING PHASE OF ITS GROWTH
            JOURNEY. MEDICAMEN HAS PROVED ITS TECHNICAL EXCELLENCE BY DEVELOPING
            COMPLEX AND CHALLENGING FORMULATION TECHNOLOGIES. WE ARE COMMITTED
            TO THE PURSUIT OF EXCELLENCE IN BUSINESS AND SOCIETY."
          </h2>
          <p className="text-white px-10">
            - RAHUL BISHNOI Chairman, Medicamen Biotech
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanWords;
