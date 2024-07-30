import Banner from "@/components/homepage/Banner";
import ChairmanWords from "@/components/homepage/ChairmanWords";
import News from "@/components/homepage/News";
import Numbers from "@/components/homepage/Numbers";
import Offering from "@/components/homepage/Offering";
import Testimonial from "@/components/homepage/Testimonial";
import VideoSection from "@/components/homepage/VideoSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <VideoSection />
      <Numbers />
      <Offering />
      {/* <Testimonial /> */}
      {/* <News /> */}
      <ChairmanWords />
    </div>
  );
};

export default page;
