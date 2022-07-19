import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo1.png";

import { useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const navLinks = [
    { label: "Beranda", path: "/" },
    { label: "Data Aktual", path: "/data_aktual" },
    { label: "Fuzzy Time Series", path: "/fuzzy_time_series/uod_interval" },
    { label: "Data Hasil Prediksi", path: "/data_hasil_prediksi" },
    { label: "Grafik Hasil Prediksi", path: "/grafik_hasil_prediksi" },
  ];

  const pathname = useLocation();

  const isActive = (pn) => {
    if (pn === pathname.pathname)
      return "border-b-2 border-cyan-600 text-cyan-600";
  };

  return (
    <div className="w-50 shadow-md bg-white px-2 py-5 fixed left-0 top-0 h-screen z-50  ">
      <Link to="/">
        <img
          src={Logo}
          alt=""
          className=" w-36 self-center hover:border hover:rounded-md hover:scale-110 transition"
        />
      </Link>
      <ul className="relative">
        {navLinks.map((link, index) => (
          <li className="relative" key={index}>
            <Link to={link.path}>
              <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className={`${isActive(link.path)} `}>{link.label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
