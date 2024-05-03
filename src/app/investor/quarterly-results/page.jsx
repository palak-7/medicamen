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
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">Quarterly Results March - 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-173.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 ">
                <td class="px-6 py-4">Quarterly Results June - 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-174.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">Quarterly Results-Sep 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-175.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results Dec-2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-177.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results-June 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-17.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results-Sep 2022</td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-18.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results-Dec 2022</td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-19.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results-March-2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-20.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results- Dec 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-21.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results- Sep 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-22.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results-June 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-23.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Quarterly Results-March 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-24.pdf" target="__blank">
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
