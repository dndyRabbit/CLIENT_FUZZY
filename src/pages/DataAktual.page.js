import React from "react";
import SideNavbar from "../components/SideNavbar";
import TableData from "../components/TableData";

import { useDispatch, useSelector } from "react-redux";

const DataAktual = () => {
  const { dataAktual } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-50 h-screen w-screen flex  ">
      <SideNavbar />
      <div className=" p-10 py-5 border-red-100 border  h-screen w-screen">
        <h1 className="font-bold text-3xl">Data Aktual</h1>

        <TableData data={dataAktual?.dataAktual} />
      </div>
    </div>
  );
};

export default DataAktual;
