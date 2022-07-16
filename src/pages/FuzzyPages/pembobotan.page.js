import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";

import FuzzyNavbar from "../../components/FuzzyNavBar";
import { useSelector } from "react-redux";
import flrgDataFunction from "../../utils/flrgData";

import FLRGTable from "../../components/FuzzyTable/flrg.table";
import FlrData from "../../utils/flrData";
import AmountOfInterval from "../../utils/amountOfInterval";
import Redevided from "../../utils/redevided";
import PembobotanTable from "../../components/FuzzyTable/pembobotan.table";
import NormalisasiPembobotanTable from "../../components/FuzzyTable/normalisasiPembobotan.table";
import { PembobotanUtil } from "../../utils/fuzzy.utils";

const PembobotanPage = () => {
  const { dataFuzzifikasi, dataInterval, dataAktual } = useSelector(
    (state) => state
  );

  const pembobotonUtil = PembobotanUtil({
    dataFuzzifikasi,
    dataInterval,
    dataAktual,
  });

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-60 p-10 py-5 border-red-100 space-y-2">
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
