import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import FuzzyNavbar from "../../components/FuzzyNavBar";
import IntervalTable from "../../components/FuzzyTable/Interval.table";
import AdditionIntervalData from "../../components/AdditionIntervalData";
import IntervalRedevidedTable from "../../components/FuzzyTable/IntervalRedivided.table";

import { useSelector, useDispatch } from "react-redux";
import AmountOfInterval from "../../utils/amountOfInterval";
import AmountOfInterval2 from "../../utils/amountOfInterval2";
import Redevided from "../../utils/redevided";
import RedevidedAmountOfInterval from "../../utils/redevidedAmountOfInterval";
import { IntervalUtil } from "../../utils/fuzzy.utils";

const IntervalPage = () => {
  const { dataInterval, dataFuzzifikasi, dataAktual } = useSelector(
    (state) => state
  );

  const intervalData = IntervalUtil({
    dataInterval,
    dataFuzzifikasi,
    dataAktual,
  });

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-60 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className="text-xl">Universe of Discourse & Interval</h1>
        <FuzzyNavbar />
        <AdditionIntervalData data={dataInterval?.dataInterval?.data} />
        <h1 className="text-xl">UoD & Interval</h1>
        <IntervalTable
          data={intervalData?.modIntervalData}
          head={dataInterval?.dataInterval?.data}
        />
        <h1 className="text-xl mt">Re-devided UoD & Interval</h1>

        <IntervalRedevidedTable
          data={intervalData?.redevidedIntervalData}
          head={dataInterval?.dataInterval?.data}
        />
      </div>
    </div>
  );
};

export default IntervalPage;
