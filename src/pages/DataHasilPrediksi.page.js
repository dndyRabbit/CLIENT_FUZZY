import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HasilPrediksiTable from "../components/HasilPrediksi.table";
import SideNavbar from "../components/SideNavbar";
import {
  FlrgUtil,
  PembobotanUtil,
  IntervalUtil,
  FuzzifikasiUtil,
} from "../utils/fuzzy.utils";
import HasilPrediksiUtil from "../utils/hasilPrediksi.util";

const HasilPrediksi = () => {
  const { dataFuzzifikasi, dataInterval, dataAktual } = useSelector(
    (state) => state
  );

  const hasilPrediksUtil = HasilPrediksiUtil({
    dataFuzzifikasi,
    dataInterval,
    dataAktual,
  });

  return (
    <div className="bg-gray-50 h-screen w-screen flex ">
      <SideNavbar />
      <div className=" p-10 py-5 border-red-100 border  h-screen w-screen space-y-2">
        <h1 className="font-bold text-3xl">HASIL PREDIKSI</h1>
        <HasilPrediksiTable data={hasilPrediksUtil} />
      </div>
    </div>
  );
};

export default HasilPrediksi;
