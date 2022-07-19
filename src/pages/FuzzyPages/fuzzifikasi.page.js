import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";

import FuzzyNavbar from "../../components/FuzzyNavBar";
import FuzzifikasiTable from "../../components/FuzzyTable/Fuzzifikasi.table";
import RedevidedFuzzfikasiTable from "../../components/FuzzyTable/redevidedFuzzifikasi.table";
import Redevided from "../../utils/redevided";
import { useSelector } from "react-redux";
import AmountOfInterval from "../../utils/amountOfInterval";
import RedevidedAmountOfInterval from "../../utils/redevidedAmountOfInterval";
import { FuzzifikasiUtil } from "../../utils/fuzzy.utils";

const FuzzificationPage = () => {
  const { dataFuzzifikasi, dataInterval, dataAktual } = useSelector(
    (state) => state
  );

  const fuzzifikasiUtil = FuzzifikasiUtil({
    dataFuzzifikasi,
    dataInterval,
    dataAktual,
  });

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-52 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className="text-xl">Fuzzifikasi</h1>
        <FuzzyNavbar />
        <FuzzifikasiTable data={dataFuzzifikasi?.dataFuzzifikasi?.data} />
        <h1 className="text-xl">Re-devided Fuzzifikasi</h1>
        <RedevidedFuzzfikasiTable
          data={fuzzifikasiUtil?.redevidedData?.fuzzifikasiRedevided}
          head={dataFuzzifikasi?.dataFuzzifikasi?.data}
        />
      </div>
    </div>
  );
};

export default FuzzificationPage;
