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
  const { dataFuzzifikasi, dataInterval, dataAktual, dataFlrg } = useSelector(
    (state) => state
  );

  const pembobotonUtil = PembobotanUtil({
    dataFlrg: dataFlrg?.dataFlrg?.data,
  });

  const hasilPrediksUtil = HasilPrediksiUtil({
    dataFuzzifikasi,
    dataInterval,
    dataAktual,
    dataFlrgs: dataFlrg?.dataFlrg?.data,
  });

  const newHasilPrediksi = hasilPrediksUtil?.body?.map((value, index) => {
    if (index === 0) {
      value.waktu = value.waktu;
      value.nilai = 0;
    }
    return value;
  });
  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-52 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">HASIL PREDIKSI</h1>
        <HasilPrediksiTable
          data={newHasilPrediksi}
          head={hasilPrediksUtil?.head}
        />
      </div>
    </div>
  );
};

export default HasilPrediksi;
