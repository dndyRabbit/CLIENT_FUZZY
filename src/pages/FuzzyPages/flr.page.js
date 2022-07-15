import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";
import FLRTable from "../../components/FuzzyTable/flr.table";
import FuzzyNavbar from "../../components/FuzzyNavBar";
import { useSelector } from "react-redux";
import FlrData from "../../utils/flrData";
import AmountOfInterval from "../../utils/amountOfInterval";
import Redevided from "../../utils/redevided";
import { FlrUtil } from "../../utils/fuzzy.utils";

const FlrPage = () => {
  const { dataFuzzifikasi, dataInterval, dataAktual } = useSelector(
    (state) => state
  );

  const flrUtil = FlrUtil({ dataFuzzifikasi, dataInterval, dataAktual });

  return (
    <div className="bg-gray-50 h-screen w-screen flex ">
      <SideNavbar />
      <div className=" p-10 py-5 border-red-100 border  h-screen w-screen space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className="text-xl">FLR</h1>
        <FuzzyNavbar />
        <FLRTable data={flrUtil?.flrData} />
      </div>
    </div>
  );
};

export default FlrPage;
