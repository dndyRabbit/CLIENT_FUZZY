import React from "react";
import SideNavbar from "../components/SideNavbar";

const Home = () => {
  return (
    <div className="bg-gray-50 flex ">
      <SideNavbar />
      <div className=" flex-1 ml-52 p-10 py-5 border-red-100 border  space-y-2">
        <h1 className="font-bold text-3xl">DASHBOARD</h1>
      </div>
    </div>
  );
};

export default Home;
