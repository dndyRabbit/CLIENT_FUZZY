import React from "react";

const NormalisasiPembobotanTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {data?.head?.map((value, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Looping dari sebuat data berbentuk Array yang telah dibuat */}
          {data?.normalisasi?.map((value, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <td className="px-6 py-4">{++index}</td>
              <td className="px-6 py-4">{`${value?.key?.[0]} -> ${value?.key?.[1]}`}</td>
              <td className="px-6 py-4">{value?.jumlah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NormalisasiPembobotanTable;
