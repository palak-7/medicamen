"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar";
const page = () => {
  const usePathName = usePathname();
  const x = usePathName.split("/");
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <div className="mx-5 lg:mx-0 lg:flex justify-evenly">
        <Sidebar selected={x[2]} />
        <div class="mx-10 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  File
                </th>
                <th scope="col" class="px-6 py-3">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Unclaimed Dividend 2019</td>
                <td class="px-6 py-4">
                  <Image src="/investors/xlsx.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-2.xlsx">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Unclaimed Dividend 2020</td>
                <td class="px-6 py-4">
                  <Image src="/investors/xlsx.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-3.xlsx">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50 border-b">
                <td class="px-6 py-4">Unclaimed Dividend 2021</td>
                <td class="px-6 py-4">
                  <Image src="/investors/xlsx.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-4.xlsx">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Unclaimed Dividend 2022</td>
                <td class="px-6 py-4">
                  <Image src="/investors/xlsx.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-5.xlsx">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
