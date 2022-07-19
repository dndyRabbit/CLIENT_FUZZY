import React, { useEffect, useState } from "react";
import AmountOfInterval from "./amountOfInterval";
import FlrData from "./flrData";
import FlrgDataFunction from "./flrgData";
import Redevided from "./redevided";
import RedevidedAmountOfInterval from "./redevidedAmountOfInterval";

const HasilPrediksiUtil = ({ dataFuzzifikasi, dataInterval, dataAktual }) => {
  const [hasilPrediksiDatas, setHasilPrediksiDatas] = useState({
    head: ["No", "Waktu", "Nilai"],
    body: null,
  });

  useEffect(() => {
    // -------------------- NORMALISASI PEMBOBOTAN -----------------------//
    const newIntervalData = AmountOfInterval(
      dataFuzzifikasi?.dataFuzzifikasi?.data,
      dataInterval?.dataInterval?.data?.body
    );

    const redevidedData = Redevided(
      newIntervalData,
      dataAktual?.dataAktual?.data?.body
    );

    const flrDatas = FlrData(redevidedData?.fuzzifikasiRedevided);
    const flrgDatas = FlrgDataFunction(
      flrDatas?.body,
      redevidedData?.uodInterval
    );

    let bobotData = [];
    flrgDatas?.body?.forEach((dataFlrg) => {
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
    flrgDatas?.body?.map((val) => {
      tempKey?.push(val?.key);
    });

    let tempBobot = [];
    bobotData?.map((val, index) => {
      tempBobot.push(Object.values(val));
    });

    let tempFlrg = [];
    flrgDatas?.body?.map((value) => {
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
        flrgDatas?.body?.map((v, index2) => {
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
    flrgDatas?.body?.forEach((value) => {
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

    // -------------------- NORMALISASI PEMBOBOTAN -----------------------//

    //   -------------------- FUZZIFIKASI --------------------//

    const redevidedIntervalData = RedevidedAmountOfInterval(
      redevidedData?.fuzzifikasiRedevided,
      redevidedData?.uodInterval
    );
    // ------------------------- FUZZIFIKASI ------------------------

    // ---------------- INTERVAL DATA -----------------

    let newInterval = [];
    redevidedIntervalData?.body?.map((value, index) => {
      let data = {
        universe: `A${index + 1}`,
        median: value.median,
      };
      newInterval.push(data);
    });
    //   --------------------- INTERVAL DATA ----------------------

    // ------------
    let tempData = [];
    normalisasiPembobotan?.map((value, index) => {
      newInterval?.forEach((e, i) => {
        if (value.key[1] === e.universe) {
          tempData.push({
            ...value,
            median: e.median,
            hasil: e.median * value.jumlah,
            classes: pembobotanClass?.[index],
          });
        }
      });
    });

    let tempKey2 = flrgDatas?.body?.map((value) => {
      return { key: value.key, data: [] };
    });

    tempKey2?.map((value, index) => {
      tempData?.map((val) => {
        if (value.key === val.classes) {
          value.data.push(val.hasil);
        }
      });
    });

    let tempHasilJumlah = [];
    tempKey2?.map((value) => {
      let sum = 0;
      let data = {
        key: value?.key,
        hasilJumlah: value?.data?.reduce((a, b) => a + b, 0),
      };
      tempHasilJumlah.push(data);
      sum = 0;
    });

    let hasilPrediksiData = [];
    redevidedData?.fuzzifikasiRedevided?.map((value) => {
      tempHasilJumlah?.map((val, index) => {
        if (value.fuzzifikasi === val.key) {
          let data = {
            waktu: value?.waktu,
            nilai: val?.hasilJumlah,
          };
          hasilPrediksiData.push(data);
        }
      });
    });

    setHasilPrediksiDatas({
      ...hasilPrediksiDatas,
      body: hasilPrediksiData,
    });
  }, []);

  return hasilPrediksiDatas;
};

export default HasilPrediksiUtil;
