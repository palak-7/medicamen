import React from "react";

const VideoSection = () => {
  return (
    <div className="pt-20">
      <div className="lg:grid lg:grid-cols-4">
        <div className="p-10 col-start-1 col-span-2 -mt-10">
          <h1 className="text-4xl">MEDICAMEN BIOTECH LIMITED</h1>
          <p className="text-4xl font-bold">
            THERAPEUTIC SOLUTIONS FOR WELL-BEING AND LIFE. WE ARE FOCUSED, SO
            OUR PATIENTS CAN LIVE THEIR LIFE TO THE FULLEST.
          </p>
          <p>
            MEDICAMEN Biotech Limited (MBL) is committed to providing quality
            medicines at an affordable cost through relentless pursuit of
            excellence in its operations, product quality, documentation and
            service.
          </p>
        </div>
        <div className="col-start-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/50qq4NBnj7Q?si=-WSfse_e-QVqbjsK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="lg:h-[315px] lg:w-[560px] h-[200px] w-[250px] mx-10 mb-10"
          ></iframe>
        </div>
      </div>
      {/* <div className="lg:grid lg:grid-cols-4">
        <div className="pl-10 pb-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CPOoPYO_OVM?si=m-WFmBeALNFptQ-n"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" col-start-3 col-span-2">
          <h1 className="text-4xl">MEDICAMEN BIOTECH LIMITED</h1>
          <p className="text-4xl font-bold uppercase">
            has constantly strived to be on the path of growth
          </p>
          <p>
            on the strength of its brilliant human resource, world class
            facilities and a global vision of its Management.From being a purely
            Formulation manufacturer of general products, the Company has
            diversified into setting up a state-of-the-art R&D Centre followed
            by a most modern API manufacturing facility.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default VideoSection;
