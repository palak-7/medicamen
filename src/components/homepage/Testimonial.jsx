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
    <div className="relative">
      <div className="absolute inset-0 bg-secondary bg-opacity-80"></div>
      <div className="absolute inset-0">
        <Slider {...settings}>
          {data?.map((d) => (
            <div
              key={d.id}
              className="grid grid-cols-2 gap-3 hover:scale-105 hover:pointer bg-white text-black group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-[4000ms]"
            >
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="testimonialImg"
                />
                <h1 className="text-xl font-semibold line-clamp-1">{d.name}</h1>
                <p className="text-gray-700 line-clamp-5">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Image
        src="/testimonial.jpg"
        width={1000}
        height={1000}
        className="h-[350px] w-full"
        alt="testimonialImg"
      />
    </div>
  );
};

export default Testimonial;
