import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";

import FuzzyNavbar from "../../components/FuzzyNavBar";
import { useSelector } from "react-redux";
import PembobotanTable from "../../components/FuzzyTable/pembobotan.table";
import NormalisasiPembobotanTable from "../../components/FuzzyTable/normalisasiPembobotan.table";
import { PembobotanUtil } from "../../utils/fuzzy.utils";

const PembobotanPage = () => {
  const { dataFlrg } = useSelector((state) => state);

  const pembobotonUtil = PembobotanUtil({
    dataFlrg: dataFlrg?.dataFlrg?.data,
  });
  useEffect(() => {
    console.log(pembobotonUtil, "FLRG DATA");
  }, []);
  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-52 p-10 py-5 border-red-100 space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className=" text-xl">Pembobotan</h1>
        <FuzzyNavbar />
        <PembobotanTable data={pembobotonUtil} />
        <h1 className=" text-xl">Normalisasi Pembobotan</h1>
        <NormalisasiPembobotanTable data={pembobotonUtil} />
      </div>
    </div>
  );
};

export default PembobotanPage;
