"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getNews } from "@/services/getData";
import { SlCalender } from "react-icons/sl";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
const News = () => {
  const [news, setNews] = useState([]);

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
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="font-bold text-3xl text-center m-5">
        Check Out the latest News
      </h1>
      <div className="grid lg:grid-cols-3 gap-x-5 mx-4 lg:mx-20">
        {news.map((n) => (
          <div
            key={n.id}
            className="border-gray-400 border mt-4 shadow-xl hover:scale-105"
          >
            <div className="p-3">
              <Image
                src={`/news/${n.img}`}
                width={400}
                height={200}
                className="h-[200px] w-[400px]"
              />
              <h1 className="font-semibold text-2xl mt-2">{n.title}</h1>
              <div className="flex justify-between my-2">
                <p className="flex text-gray-700 text-sm">
                  <SlCalender className="mt-1 mr-1" />
                  {n.date}
                </p>
                <p className="flex text-gray-700 text-sm">
                  <FaEdit className="mt-1 mr-1" />
                  {n.category}
                </p>
              </div>

              <p>{n.subcontent}</p>
            </div>
            <Link href={`/news/${n.id}`} className="flex justify-center mb-3">
              <div className="flex left-0 right-0 bg-primary p-3 text-white">
                Read Full News
                <MdOutlineKeyboardDoubleArrowRight className="mt-1" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
