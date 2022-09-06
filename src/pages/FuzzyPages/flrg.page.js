import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";

import FuzzyNavbar from "../../components/FuzzyNavBar";
import { useSelector } from "react-redux";
import flrgDataFunction from "../../utils/flrgData";

import FLRGTable from "../../components/FuzzyTable/flrg.table";
import FlrData from "../../utils/flrData";
import AmountOfInterval from "../../utils/amountOfInterval";
import Redevided from "../../utils/redevided";
import { FlrgUtil } from "../../utils/fuzzy.utils";

const FlrgPage = () => {
  const { dataFlrg, dataFuzzifikasi, dataInterval, dataAktual } = useSelector(
    (state) => state
  );

  // const flrgUtil = FlrgUtil({ dataFuzzifikasi, dataInterval, dataAktual });
  console.log(dataFlrg, "FLRG ");

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className="flex-1 ml-52 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className="text-xl">FLRG</h1>
        <FuzzyNavbar />
        <FLRGTable data={dataFlrg?.dataFlrg?.data} />
      </div>
    </div>
  );
};

export default FlrgPage;
