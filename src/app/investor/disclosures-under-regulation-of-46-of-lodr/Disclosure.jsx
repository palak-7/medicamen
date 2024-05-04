"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar";
const Disclosure = () => {
  const usePathName = usePathname();
  const x = usePathName.split("/");
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
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
                <td class="px-6 py-4">General Announcement 19.07.2023 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-148.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 ">
                <td class="px-6 py-4">General Announcements 05.08.2022</td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-143.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">General Announcement 12.08.2022 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-144.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">General Announcements 03.10.2022 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-145.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">General Announcement 31.12.2022 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-146.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  Intimation Under Regulation 30 Of LODR WOS 26.08.2022{" "}
                </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-147.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  General Announcement-Upgradation Of Bhiwadi Plant-19.01.2021{" "}
                </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-139.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">BSE Letters Investor Meet 25.02.2021 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-140.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">BSE Letters Investor Meet 29.07.2021 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-141.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Medicamen Intimation 03.12.2021 </td>
                <td class="px-6 py-4">
                  <Image
                    src="/investors/pdf.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-142.pdf" target="__blank">
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

export default Disclosure;
