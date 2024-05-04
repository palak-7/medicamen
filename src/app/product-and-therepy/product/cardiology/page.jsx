import React from "react";

const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-5">CARDIOLOGY</h1>
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
              <td class="px-6 py-4">Cardiology</td>
              <td class="px-6 py-4">Nifedipine Capsules</td>
              <td class="px-6 py-4">5mg, 10mg, 20mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Atorvastatin Tablets</td>
              <td class="px-6 py-4">5mg, 10mg, 20mg, 40mg, 80mg</td>
              <td class="px-6 py-4">5mg, 10mg, 20mg, 40mg,</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Rosuvastatin Tablets</td>
              <td class="px-6 py-4">5mg, 10mg, 20mg, 40mg</td>
              <td class="px-6 py-4">5mg, 10mg, 20mg, 40mg</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Simvastatin Tablets USP</td>
              <td class="px-6 py-4">5mg, 10mg, 20mg, 40mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                5
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Fenofibrate Capsules</td>
              <td class="px-6 py-4">200mg</td>
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
              <td class="px-6 py-4">Amlodipine + Lisinopril Tablets</td>
              <td class="px-6 py-4">10mg + 20mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                7
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Amlodipine + Atenolol Tablets</td>
              <td class="px-6 py-4">5mg + 50mg</td>
              <td class="px-6 py-4">5mg + 50mg</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                8
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Amlodipine + Lisinopril Tablets</td>
              <td class="px-6 py-4">5mg + 20mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                9
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Amlodipine + Losartan Tablet</td>
              <td class="px-6 py-4">5mg + 50mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                9
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Amlodipine + Losartan Tablet</td>
              <td class="px-6 py-4">5mg + 100mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                10
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Amlodipine + Telmisartan</td>
              <td class="px-6 py-4">5mg + 40mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                11
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Amlodipine Besilate Tablets USP</td>
              <td class="px-6 py-4">5mg, 10mg</td>
              <td class="px-6 py-4">5mg, 10mg</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                12
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Atenolol Tablets BP</td>
              <td class="px-6 py-4">25mg, 50mg, 100mg</td>
              <td class="px-6 py-4">100mg</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                13
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Atenolol + Chlorthalidone Tablets</td>
              <td class="px-6 py-4">50mg + 12.5mg 100mg + 50mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                14
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Captopril Tablets BP</td>
              <td class="px-6 py-4">25mg, 50mg</td>
              <td class="px-6 py-4">25mg</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                15
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Carvedilol Tablets USP</td>
              <td class="px-6 py-4">3.125mg, 6.25mg, 12.5mg, 25mg</td>
              <td class="px-6 py-4">3.125mg, 6.25mg, 12.5mg, 25mg</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                16
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Enalapril Maleate + Hydrochlorothiazide</td>
              <td class="px-6 py-4">10mg + 25mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                17
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Enalapril Tablets</td>
              <td class="px-6 py-4">5mg, 10mg, 20mg, 50mg</td>
              <td class="px-6 py-4">N.Av.</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                18
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Hydralazine Tablets BP</td>
              <td class="px-6 py-4">25mg, 50mg</td>
              <td class="px-6 py-4">25mg</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                19
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Hydrochlorothiazide Tablets BP</td>
              <td class="px-6 py-4">12.5mg, 25mg, 50mg</td>
              <td class="px-6 py-4">
                12.5mg, 25mg, 50mg(12.5 with brand name Hypress)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
