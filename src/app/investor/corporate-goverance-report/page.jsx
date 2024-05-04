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
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">Corporate Governance March 24 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-178.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 ">
                <td class="px-6 py-4">
                  Corporate Governance Report-March 2023
                </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-104.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">Corporate Governance Report-Sep 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-161.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Corporate Governance Report-Dec2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-165.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Corporate Governance Dec 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-46.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Corporate Governance Report Sep 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-47.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Corporate Governance June 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-48.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  Corporate Governance Report-March 2022{" "}
                </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-49.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Corporate Governance Report-DEC 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-50.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Corporate Governance Report-SEP 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-51.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  Corporate Governance Report-June 2021{" "}
                </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-52.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  Corporate Governance Report-March 2021{" "}
                </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-53.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">Corporate Governance Report-Dec 2020 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-54.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  Corporate Governance Report- Sep 2020{" "}
                </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-55.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  Corporate Governance Report-June 2020{" "}
                </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-56.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                  Corporate Governance Report-March 2020{" "}
                </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-57.pdf" target="__blank">
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
