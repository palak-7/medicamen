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
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <div className="flex justify-evenly">
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
              <tr class="odd:bg-white even:bg-gray-50 ">
                <td class="px-6 py-4">CRISIL RATING MARCH 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-80.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">CRISIL RATING MARCH 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-12.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">CRISIL RATING MARCH 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-13.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Crisil Rating March 2020 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-14.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Crisil Rating Dec 2019 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-15.pdf" target="__blank">
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
