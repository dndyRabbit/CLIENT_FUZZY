import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import FuzzyNavbar from "../../components/FuzzyNavBar";
import IntervalTable from "../../components/FuzzyTable/Interval.table";
import AdditionIntervalData from "../../components/AdditionIntervalData";
import { useSelector, useDispatch } from "react-redux";

import AmountOfInterval from "../../utils/amountOfInterval";

const IntervalPage = () => {
  const { dataInterval, dataFuzzifikasi, dataAktual } = useSelector(
    (state) => state
  );

  const newIntervalData = AmountOfInterval(
    dataFuzzifikasi?.dataFuzzifikasi?.data,
    dataInterval?.dataInterval?.data?.body
  );

  useEffect(() => {
    console.log(newIntervalData, "new interval data");
  }, []);

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-52 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className="text-xl">Universe of Discourse & Interval</h1>
        <FuzzyNavbar />
        <AdditionIntervalData data={dataInterval?.dataInterval?.data} />
        <h1 className="text-xl">UoD & Interval</h1>
        <IntervalTable
          data={newIntervalData}
          head={dataInterval?.dataInterval?.data}
        />
      </div>
    </div>
  );
};

export default IntervalPage;
