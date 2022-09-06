import React, { useState, useEffect } from "react";

export const PembobotanUtil = ({ dataFlrg }) => {
  const [pembobotanDatas, setPembobotanData] = useState({
    head: ["No", "Relasi", "Jumlah (Bobot)"],
    body: null,
    normalisasi: null,
  });
  useEffect(() => {
    let bobotData = [];
    dataFlrg?.body?.forEach((dataFlrg) => {
      const y = dataFlrg?.arr?.reduce((prev, next) => {
        if (next in prev) {
          prev[next]++;
        } else {
          prev[next] = 1;
        }
        return prev;
      }, {});
      bobotData.push(y);
    });

    let tempKey = [];
    dataFlrg?.body?.map((val) => {
      tempKey?.push(val?.key);
    });

    let tempBobot = [];
    bobotData?.map((val, index) => {
      tempBobot.push(Object.values(val));
    });

    let tempFlrg = [];
    dataFlrg?.body?.map((value) => {
      tempFlrg?.push(value?.arr);
    });

    let tempArr = [];
    tempFlrg.map((value) => {
      var uniq = value?.reduce(function (a, b) {
        if (a?.indexOf(b) < 0) a?.push(b);
        return a;
      }, []);
      tempArr.push(uniq);
    });

    let pembobotanClass = [];
    let pembobotanDistribution = [];
    let pembobotanKey = [];
    tempArr?.map((value, index1) => {
      value?.map((val) => {
        dataFlrg?.body?.map((v, index2) => {
          if (index1 === index2) {
            pembobotanKey.push([v?.key, val]);
            pembobotanDistribution.push(tempFlrg[index1].length);
            pembobotanClass.push(`A${index1 + 1}`);
          }
        });
      });
    });

    let pembobotanValue = tempBobot?.reduce(function (prev, next) {
      return prev?.concat(next);
    });

    let pembobotanData = [];
    pembobotanKey?.forEach((value, index) => {
      pembobotanValue?.forEach((val, i) => {
        if (index === i) {
          let tempData = {
            key: value,
            jumlah: val,
          };
          pembobotanData.push(tempData);
        }
      });
    });

    // -------------------------------- NORMALISASI LOGIC ---------------------------//
    let distribution = [];
    dataFlrg?.body?.forEach((value) => {
      distribution.push(value?.arr?.length);
    });

    let normalisasiPembobotan = [];
    pembobotanData?.forEach((value, index) => {
      pembobotanDistribution?.forEach((val, i) => {
        if (index === i) {
          let newData = {
            ...value,
            jumlah: value?.jumlah / val,
          };
          normalisasiPembobotan.push(newData);
        }
      });
    });

    setPembobotanData({
      ...pembobotanDatas,
      body: pembobotanData,
      normalisasi: normalisasiPembobotan,
      pembobotanClass: pembobotanClass,
    });
  }, []);

  return pembobotanDatas;
};
