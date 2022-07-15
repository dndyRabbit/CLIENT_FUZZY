import React, { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";

import { UserData } from "../helper/data";
import LineChart from "../components/LineChart";
import HasilPrediksiUtil from "../utils/hasilPrediksi.util";
import { useSelector } from "react-redux";

const Grafik = () => {
  const { dataFuzzifikasi, dataInterval, dataAktual } = useSelector(
    (state) => state
  );

  const hasilPrediksUtil = HasilPrediksiUtil({
    dataFuzzifikasi,
    dataInterval,
    dataAktual,
  });

  let aktualData = [];
  dataAktual?.dataAktual?.data?.body?.map((val) => {
    aktualData.push(val?.[2]);
  });

  const grafikDatas = {
    labels: hasilPrediksUtil?.body?.map((val) => {
      return val?.waktu;
    }),
    datasets: [
      {
        label: "Hasil Prediksi",

        data: aktualData?.map((val) => {
          return val;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Data Aktual",
        data: hasilPrediksUtil?.body?.map((val) => {
          return val.nilai;
        }),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <div className="bg-gray-50 h-screen w-screen flex ">
      <SideNavbar />
      <div className=" p-10 py-5 border-red-100 border  h-screen w-screen">
        <h1 className="font-bold text-3xl">GRAFIK HASIL PREDIKSI</h1>
        <div className="grid grid-cols-1">
          <LineChart chartData={grafikDatas} width={"500px"} />
        </div>
      </div>
    </div>
  );
};

export default Grafik;
