import React from "react";

const IntervalTable = ({ data, head }) => {
  return (
    <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* Looping dari sebuat data berbentuk Array yang telah dibuat */}
            <th scope="col" className="px-6 py-3">
              NO
            </th>
            {head?.head?.map((value, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {value}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Looping dari sebuat data berbentuk Array yang telah dibuat */}
          {data?.map((value, index) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <td className="px-6 py-4">{++index}</td>
                <td className="px-6 py-4">{value?.universe}</td>
                <td className="px-6 py-4">{value?.batasBawah}</td>
                <td className="px-6 py-4">{value?.batasAtas}</td>
                <td className="px-6 py-4">{value?.median}</td>
                <td className="px-6 py-4">{value?.jumlah}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IntervalTable;
