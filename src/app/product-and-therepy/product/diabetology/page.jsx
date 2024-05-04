import React from "react";

const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-5">DIABETOLOGY</h1>
      <p className="font-bold text-center">
        Affordable Niche Healthcare Solutions
      </p>
      <p className=" text-center mb-5 mx-32">
        Medicamen develops and distributes products for healthcare professionals
        that promote health and well-being for Indians in all stages of life.
        Search by all products, business area or pharmaceutical therapy area
        below:
      </p>
      <div class="mx-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Serial No.
              </th>
              <th scope="col" class="px-6 py-3">
                Therapy
              </th>
              <th scope="col" class="px-6 py-3">
                Generic Name
              </th>
              <th scope="col" class="px-6 py-3">
                Strength Available
              </th>
              <th scope="col" class="px-6 py-3">
                Copp Available
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="px-6 py-4">Diabetology</td>
              <td class="px-6 py-4">Glibenclamide Tablets BP</td>
              <td class="px-6 py-4">2.5mg, 5mg</td>
              <td class="px-6 py-4">5mg</td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Gliclazide Tablets BP</td>
              <td class="px-6 py-4">40mg, 80mg</td>
              <td class="px-6 py-4">80mg</td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Glipizide Tablets BP</td>
              <td class="px-6 py-4">5mg</td>
              <td class="px-6 py-4"></td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Glimepiride tablets BP</td>
              <td class="px-6 py-4">1mg, 2mg, 3mg, 5mg</td>
              <td class="px-6 py-4">USP (2 mg, 4 mg)</td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                5
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                Glimepiride + Metformin (extended Release Bylayerd Tablet)
              </td>
              <td class="px-6 py-4">2mg+500mg/1000mg 4mg+850mg/1000mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                6
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Metformin Hydrochloride Tablets USP F/C</td>
              <td class="px-6 py-4">500mg, 850mg, 1000mg</td>
              <td class="px-6 py-4">500mg, 850 mg</td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                7
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Metformin Hydrochloride Tablets USP U/C</td>
              <td class="px-6 py-4">500mg, 850mg, 1000mg</td>
              <td class="px-6 py-4">500mg</td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                8
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Fenofibrate Capsules</td>
              <td class="px-6 py-4">200mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
