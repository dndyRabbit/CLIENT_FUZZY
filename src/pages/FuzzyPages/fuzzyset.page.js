import React from "react";
import SideNavbar from "../../components/SideNavbar";

import FuzzyNavbar from "../../components/FuzzyNavBar";
import FuzzysetTable from "../../components/FuzzyTable/Fuzzyset.table";

import { useSelector } from "react-redux";
import { IntervalUtil } from "../../utils/fuzzy.utils";

const FuzzysetPage = () => {
  const { dataInterval, dataFuzzifikasi, dataAktual } = useSelector(
    (state) => state
  );

  const intervalData = IntervalUtil({
    dataInterval,
    dataFuzzifikasi,
    dataAktual,
  });

  console.log(intervalData?.redevidedIntervalData?.body);

  const newData = intervalData?.redevidedIntervalData?.body?.map(
    (value, index) => {
      return {
        universe: `A${++index}`,
        batasBawah: value.batasBawah,
        batasAtas: value.batasAtas,
      };
    }
  );

  // console.log(newData, "adasdasdas");

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className="flex-1 ml-52 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className="text-xl">Fuzzyset</h1>
        <FuzzyNavbar />
        <FuzzysetTable data={newData} />
      </div>
    </div>
  );
};

export default FuzzysetPage;
