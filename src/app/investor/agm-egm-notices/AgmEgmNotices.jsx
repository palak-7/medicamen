"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar";
const AgmEgmNotices = () => {
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
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">AGM Notice 2022-23 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-74.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 ">
                <td class="px-6 py-4">AGM Notice_2021-22</td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-58.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">AGM Notice_2020-21 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-59.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">AGM Notice_2019-20 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-60.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">AGM Notice 2018-19 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-61.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">EGM Voting Results 26-08-022 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-62.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Proceedings Of EOGM 26-08-022 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-63.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">EGM Notice 2022 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-64.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">EGM Notice 2019 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-65.pdf" target="__blank">
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

export default AgmEgmNotices;
