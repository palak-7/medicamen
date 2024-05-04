import React from "react";

const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[220px]">
      <h1 className="text-3xl font-bold text-center mb-5">CANCER CARE</h1>
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
              <td class="px-6 py-4">Oncology</td>
              <td class="px-6 py-4">Abiraterone acetate </td>
              <td class="px-6 py-4">250mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Anastrozole</td>
              <td class="px-6 py-4">1mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Bicalutamide</td>
              <td class="px-6 py-4">50mg</td>
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
              <td class="px-6 py-4">Bendmustine HCL</td>
              <td class="px-6 py-4">25mg/vial</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                5
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Bortezomib</td>
              <td class="px-6 py-4">3.5mg/vial</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                6
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Busulfan</td>
              <td class="px-6 py-4">6mg/ml</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                7
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Capecitabine</td>
              <td class="px-6 py-4">150mg, 500mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                8
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Cisplatin</td>
              <td class="px-6 py-4">1mg/ml</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                9
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Erlotinib HCL</td>
              <td class="px-6 py-4">25mg, 100mg, 150mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                10
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Gefitinib</td>
              <td class="px-6 py-4">250mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                11
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Imatinib mesylate</td>
              <td class="px-6 py-4">100mg, 400mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                12
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Lenalidomide</td>
              <td class="px-6 py-4">2.5mg, 5mg, 10mg, 15mg, 20mg, 25mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                13
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Letrozole</td>
              <td class="px-6 py-4">2.5mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                14
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Melphalan</td>
              <td class="px-6 py-4">50mg/vial</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                15
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Melphalan</td>
              <td class="px-6 py-4">2mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                16
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Nilotinib HCI</td>
              <td class="px-6 py-4">150mg, 200mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                17
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Oxaliplatin</td>
              <td class="px-6 py-4">50mg/vial, 100mg/vial</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                18
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Pazopanib</td>
              <td class="px-6 py-4">200mg, 400mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                19
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Pomalidomide</td>
              <td class="px-6 py-4">1mg, 2mg, 3mg, 4mg</td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                20
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">Tegafur</td>
              <td class="px-6 py-4">200mg, 400mg</td>
              <td class="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
