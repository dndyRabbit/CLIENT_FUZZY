import React from "react";
import SideNavbar from "../../components/SideNavbar";
import FLRTable from "../../components/FuzzyTable/flr.table";
import FuzzyNavbar from "../../components/FuzzyNavBar";
import { useSelector } from "react-redux";

import { FlrUtil } from "../../utils/fuzzy.utils";

const FlrPage = () => {
  const { dataFlr } = useSelector((state) => state);

  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-52 p-10 py-5   space-y-2">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>
        <h1 className="text-xl">FLR</h1>
        <FuzzyNavbar />
        <FLRTable data={dataFlr?.dataFlr?.data} />
      </div>
    </div>
  );
};

export default FlrPage;
