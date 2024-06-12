"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      name: "Robert Krol",
      designstion: "CEO",
      review:
        "Best service ever! Sam takes his time, with each client, providing utmost care, kindness, and concern. Friendly staff.",
    },
    {
      id: 2,
      name: "HP Singh",
      designstion: "CTO",
      review:
        "We have always received the absolute best service here, the staff help extremely fast.",
    },
  ];
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="absolute w-full mt-20 lg:container lg:ml-10">
        <h1 className="font-bold lg:text-5xl text-4xl text-white text-center">
          Our Clients
        </h1>
        <p className="text-center text-white text-xl my-2 pb-10">
          See what our valuable clients tell about us
        </p>
        <Slider {...settings}>
          {data?.map((d) => (
            <div key={d.id} className="px-10">
              <div className="p-5 h-56 bg-white bg-opacity-70 text-black">
                <div className="flex flex-col items-center justify-center p-4">
                  <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="testimonialImg"
                    className="mb-4"
                  />
                  <h1 className="text-xl font-semibold line-clamp-1 mt-2">
                    Name
                  </h1>
                  <h1 className="text-md line-clamp-1">{d.designstion}</h1>
                  <p className="text-gray-700 line-clamp-5 text-center">
                    {d.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Image
        src="/testimonial.jpg"
        width={1000}
        height={1000}
        className="h-[550px] w-full"
        alt="testimonialImg"
      />
    </div>
  );
};

export default Testimonial;
