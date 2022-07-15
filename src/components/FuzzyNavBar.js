import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo1.jpeg";

import { useNavigate } from "react-router-dom";

const FuzzyNavbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { label: "UoD & Interval", path: "/fuzzy_time_series/uod_interval" },
    { label: "Fuzzyset", path: "/fuzzy_time_series/fuzzy_set" },
    { label: "Fuzzyfikasi", path: "/fuzzy_time_series/fuzzifikasi" },
    { label: "FLR", path: "/fuzzy_time_series/flr" },
    { label: "FLRG", path: "/fuzzy_time_series/flrg" },
    { label: "Pembobotan", path: "/fuzzy_time_series/pembobotan" },
  ];

  const pathname = useLocation();

  const isActive = (pn) => {
    if (pn === pathname.pathname)
      return "border-b-2 border-cyan-600 text-cyan-600";
  };

  return (
    <div className="w-full shadow-md bg-white px-2 py-4 ">
      <ul className="relative flex justify-end">
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

export default FuzzyNavbar;
