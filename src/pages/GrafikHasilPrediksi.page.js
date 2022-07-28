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

  const newHasilPrediksi = hasilPrediksUtil?.body?.map((value, index) => {
    if (index === 0) {
      value.waktu = value.waktu;
      value.nilai = 0;
    }
    return value;
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
        label: "Data Aktual",

        data: aktualData?.map((val) => {
          return val;
        }),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
      },
      {
        label: "Hasil Prediksi",
        data: newHasilPrediksi?.map((val) => {
          return val?.nilai;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 5000,
            },
          },
        ],
      },
    },
  };

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-52 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">GRAFIK HASIL PREDIKSI</h1>
        <div className="grid grid-cols-1">
          <LineChart chartData={grafikDatas} width={"500px"} />
        </div>
      </div>
    </div>
  );
};

export default Grafik;
