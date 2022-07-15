import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AmountOfInterval from "./amountOfInterval";
import AmountOfInterval2 from "./amountOfInterval2";
import FlrData from "./flrData";
import Redevided from "./redevided";
import RedevidedAmountOfInterval from "./redevidedAmountOfInterval";
import flrgDataFunction from "./flrgData";

export const IntervalUtil = ({ dataInterval, dataFuzzifikasi, dataAktual }) => {
  const [state, setState] = useState({
    modIntervalData: null, // to the global state
    redevidedIntervalData: null, // to the global state
    redevidedData: null,
  });

  useEffect(() => {
    const newIntervalData2 = AmountOfInterval2(
      dataFuzzifikasi?.dataFuzzifikasi?.data,
      dataInterval?.dataInterval?.data?.body
    );

    const newIntervalData = AmountOfInterval(
      dataFuzzifikasi?.dataFuzzifikasi?.data,
      dataInterval?.dataInterval?.data?.body
    );

    const redevidedData = Redevided(
      newIntervalData,
      dataAktual?.dataAktual?.data?.body
    );

    const redevidedIntervalData = RedevidedAmountOfInterval(
      redevidedData?.fuzzifikasiRedevided,
      redevidedData?.uodInterval
    );

    setState({
      modIntervalData: newIntervalData2,
      redevidedIntervalData: redevidedIntervalData,
      redevidedData: redevidedData,
    });
  }, []);

  return state;
};

export const FuzzifikasiUtil = ({
  dataFuzzifikasi,
  dataInterval,
  dataAktual,
}) => {
  const [state, setState] = useState({
    redevidedIntervalData: null,
    redevidedData: null,
  });

  useEffect(() => {
    const newIntervalData = AmountOfInterval(
      dataFuzzifikasi?.dataFuzzifikasi?.data,
      dataInterval?.dataInterval?.data?.body
    );

    const redevidedData = Redevided(
      newIntervalData,
      dataAktual?.dataAktual?.data?.body
    );

    const redevidedIntervalData = RedevidedAmountOfInterval(
      redevidedData?.fuzzifikasiRedevided,
      redevidedData?.uodInterval
    );

    setState({
      redevidedIntervalData: redevidedIntervalData,
      redevidedData: redevidedData,
    });
  }, []);

  return state;
};

export const FlrUtil = ({ dataFuzzifikasi, dataInterval, dataAktual }) => {
  const [state, setState] = useState({
    flrData: null,
  });
  useEffect(() => {
    const newIntervalData = AmountOfInterval(
      dataFuzzifikasi?.dataFuzzifikasi?.data,
      dataInterval?.dataInterval?.data?.body
    );

    const redevidedData = Redevided(
      newIntervalData,
      dataAktual?.dataAktual?.data?.body
    );

    const flrDatas = FlrData(redevidedData?.fuzzifikasiRedevided);

    setState({
      flrData: flrDatas,
    });
  }, []);

  return state;
};

export const FlrgUtil = ({ dataFuzzifikasi, dataInterval, dataAktual }) => {
  const [state, setState] = useState({
    flrgData: null,
  });

  useEffect(() => {
    const newIntervalData = AmountOfInterval(
      dataFuzzifikasi?.dataFuzzifikasi?.data,
      dataInterval?.dataInterval?.data?.body
    );

    const redevidedData = Redevided(
      newIntervalData,
      dataAktual?.dataAktual?.data?.body
    );

    const flrDatas = FlrData(redevidedData?.fuzzifikasiRedevided);
    const flrgDatas = flrgDataFunction(
      flrDatas?.body,
      redevidedData?.uodInterval
    );

    setState({
      flrgData: flrgDatas,
    });
  }, []);

  return state;
};

export const PembobotanUtil = ({
  dataFuzzifikasi,
  dataInterval,
  dataAktual,
}) => {
  const [pembobotanDatas, setPembobotanData] = useState({
    head: ["No", "Relasi", "Jumlah (Bobot)"],
    body: null,
    normalisasi: null,
  });
  useEffect(() => {
    const newIntervalData = AmountOfInterval(
      dataFuzzifikasi?.dataFuzzifikasi?.data,
      dataInterval?.dataInterval?.data?.body
    );

    const redevidedData = Redevided(
      newIntervalData,
      dataAktual?.dataAktual?.data?.body
    );

    const flrDatas = FlrData(redevidedData?.fuzzifikasiRedevided);
    const flrgDatas = flrgDataFunction(
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

    setPembobotanData({
      ...pembobotanDatas,
      body: pembobotanData,
      normalisasi: normalisasiPembobotan,
      pembobotanClass: pembobotanClass,
    });
  }, []);

  return pembobotanDatas;
};
