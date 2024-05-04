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
                <td class="px-6 py-4">Shareholding Pattern March 24 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-181.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 ">
                <td class="px-6 py-4">SHP March 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-149.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b">
                <td class="px-6 py-4">SHP JUNE 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-170.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP SEP 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-171.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP DEC 2023 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-172.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP March 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-137.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-150.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Sep 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-151.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Dec 2022 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-152.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP March 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-135.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2021 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-136.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP March 2020 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-131.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2020 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-132.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Sep 2020 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-133.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Dec 2020 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-134.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP March 2019 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-127.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2019 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-128.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Sep 2019 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-129.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Dec 2019 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-130.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP March 2018 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-122.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2018 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-123.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Sep 2018 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-125.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Dec 2018 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-126.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP March 2017</td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-1318.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2017 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-119.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Sep 2017 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-120.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Dec 2017 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-121.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP March 2016 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-114.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2016 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-115.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Sep 2016 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-116.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Dec 2016 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-117.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP June 2015 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-111.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Sep 2015 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-112.pdf" target="__blank">
                    <div className="underline">Click Here</div>
                  </Link>
                </td>
                <td class="px-6 py-4"></td>
              </tr>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">SHP Dec 2015 </td>
                <td class="px-6 py-4">
                  <Image src="/investors/pdf.png" width={100} height={100} />
                </td>
                <td class="px-6 py-4">
                  <Link href="/investors/files/file-113.pdf" target="__blank">
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
