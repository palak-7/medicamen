"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getNews } from "@/services/getData";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdEdit } from "react-icons/md";

import Moment from "react-moment";
import {
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  FacebookShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const DetailedNews = ({ id }) => {
  const [news, setNews] = useState([]);

  const usePathName = usePathname();
  const obj = news.find((item) => item.id == id);

  useEffect(() => {
    async function getAllNews() {
      const result = await getNews();
      if (result.success) {
        setNews(result.result);
      } else {
        console.log(result.message);
      }
    }
    getAllNews();
  }, []);
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px] grid lg:grid-cols-4">
      <div className="col-span-3">
        <div className="mx-5">
          <h1 className="text-3xl text-center font-bold p-4 mb-4">
            {obj?.title}
          </h1>
          <Image
            src={`/news/${obj?.img}`}
            width={1000}
            height={100}
            alt="news"
          />
          <div className="flex gap-x-4 justify-center mb-4">
            <p className="flex text-gray-500 mt-2">
              <SlCalender className="mt-1 text-primary mr-1" />
              Date:{" "}
              <Moment format="YYYY/MM/DD" className="ml-2">
                {obj?.date}
              </Moment>
            </p>
            <p className="flex text-gray-500 mt-2">
              <MdEdit className="mt-1 text-primary mr-1" />
              {obj?.category}
            </p>
          </div>
          <p dangerouslySetInnerHTML={{ __html: obj?.content }}></p>
        </div>
        <div className="border mx-10 mt-5"></div>
        <div className="m-10">
          <h1 className="text-center font-semibold text-lg my-4">
            Share on Social Media
          </h1>
          <div className="flex justify-center mb-5">
            <div className="flex gap-x-4">
              <FacebookShareButton
                url={`https://localhost:3000/${usePathName}`}
              >
                <FacebookIcon round={true} size={50} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`https://localhost:3000/${usePathName}`}
              >
                <WhatsappIcon round={true} size={50} />
              </WhatsappShareButton>
              <TelegramShareButton
                url={`https://localhost:3000/${usePathName}`}
              >
                <TelegramIcon round={true} size={50} />
              </TelegramShareButton>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-0 lg:ml-0 ml-3 px-4 col-span-1 border lg:mr-5">
        <h1 className="text-center font-semibold text-xl my-2 text-primary font-serif">
          Categories
        </h1>
        {news?.map((item) => (
          <>
            <div
              key={item.id}
              className="transform transition duration-300 ml-2 mr-2 rounded-lg hover:text-secondary"
            >
              <Link href={`/news/category/${item.category}`}>
                <div className="wow fadeInUp flex" data-wow-delay=".15s">
                  <IoIosArrowForward className="mt-1" />
                  <h3 className="text-md items-center font-serif">
                    {item.category}
                  </h3>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DetailedNews;
