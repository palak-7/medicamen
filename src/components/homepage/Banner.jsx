"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { useState } from "react";
import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    afterChange: (current) => setCurrentSlide(current),
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
      name: `Transforming Lives...\nThrough Therepy`,
      subheading:
        "Transforming lives of people through quality and innovative healthcare solutions to ensure accessibility to more people.",
      img: "/slider/slider-1.jpg",
      url: "services/Content-Marketing",
    },
    {
      name: `We Work For Your Success In Real`,
      subheading:
        "Transforming lives of people through quality and innovative healthcare solutions to ensure accessibility to more people.",
      img: "/slider/slider-2.png",
      url: "services/SEO",
    },
  ];

  return (
    <div className="overflow-x-clip lg:mt-[105px] md:mt-[110px] sm:mt-[120px] mt-[200px]">
      <div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={d.name} className="relative -mt-20 w-screen">
              <Image
                width={1000}
                height={100}
                src={d.img}
                alt="slider-image"
                className="lg:w-full lg:h-full h-[500px]"
              />
              {index === currentSlide && (
                <div
                  className={`absolute top-0 left-0 w-full h-full flex items-center ${
                    index === currentSlide
                      ? "animate__animated animate__slideInDown"
                      : ""
                  }`}
                >
                  <h1 className={`lg:w-1/2 grid lg:grid-cols-4 grid-cols-1`}>
                    <div className="lg:col-span-3 col-span-4 lg:col-start-2 mx-4 lg:text-5xl text-4xl font-serif text-white font-bold">
                      {d.name}
                    </div>
                    <div className="text-md text-gray-200 lg:col-start-2 lg:col-span-4 mx-4">
                      {d.subheading}
                    </div>
                  </h1>
                </div>
              )}

              {index === currentSlide && (
                <div
                  className={`absolute lg:top-36 top-40 left-0 w-full h-full flex items-center lg:ml-[185px] ml-[15px] ${
                    index === currentSlide
                      ? "animate__animated animate__slideInUp"
                      : ""
                  }`}
                >
                  <button
                    className={`p-3 shadow-2xl bg-primary font-semibold text-white`}
                  >
                    Read More
                  </button>
                  <button
                    className={`ml-2 p-3 shadow-2xl bg-primary font-semibold text-white`}
                  >
                    Contact Us
                  </button>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
