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
            src="https://www.youtube.com/embed/CPOoPYO_OVM?si=otKdVNZYbdPp2a2Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="lg:h-[315px] lg:w-[560px] h-[200px] w-[250px] mx-10 mb-10"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
