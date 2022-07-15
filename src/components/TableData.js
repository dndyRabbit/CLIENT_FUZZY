import React from "react";

const TableData = ({data}) => {
  return (
    <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* Looping dari sebuat data berbentuk Array yang telah dibuat */}
           {data?.data?.head?.map((value, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
              {value}
            </th>
           ))}
          </tr>
        
        </thead>
        <tbody>
          {/* Looping dari sebuat data berbentuk Array yang telah dibuat */}
          {data?.data?.body?.map((value, index) => { 
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{value[0]}</td>
              <td className="px-6 py-4">{value[1]}</td>
              <td className="px-6 py-4">{value[2]}</td>
              </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
