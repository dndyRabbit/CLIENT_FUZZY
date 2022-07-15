import React from "react";
import SideNavbar from "../components/SideNavbar";

import FuzzyNavbar from "../components/FuzzyNavBar";

const FuzzyPage = () => {
  return (
    <div className="bg-gray-50 h-screen w-screen flex ">
      <SideNavbar />
      <div className=" p-10 py-5 border-red-100 border  h-screen w-screen">
        <h1 className="font-bold text-3xl">FUZZY TIME SERIES</h1>

        <FuzzyNavbar />
      </div>
    </div>
  );
};

export default FuzzyPage;
