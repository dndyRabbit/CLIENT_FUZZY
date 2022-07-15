import React from "react";
import { Routes, Route } from "react-router-dom";
import NoPageFound from "../components/NoPageFound";

import Home from "../pages/Home.page";
import DataAktual from "../pages/DataAktual.page";
import FuzzyPage from "../pages/Fuzzy.page";
import DataHasilPrediksi from "../pages/DataHasilPrediksi.page";
import Grafik from "../pages/GrafikHasilPrediksi.page";

import Interval from '../pages/FuzzyPages/interval.page'
import Fuzzyset from '../pages/FuzzyPages/fuzzyset.page'
import Fuzzification from '../pages/FuzzyPages/fuzzifikasi.page'
import Flr from '../pages/FuzzyPages/flr.page'
import Flrg from '../pages/FuzzyPages/flrg.page'
import Pembobotan from '../pages/FuzzyPages/pembobotan.page'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data_aktual" element={<DataAktual />} />
      <Route path="/fuzzy_time_series" element={<FuzzyPage />} />
      <Route path="/data_hasil_prediksi" element={<DataHasilPrediksi />} />
      <Route path="/grafik_hasil_prediksi" element={<Grafik />} />
      {/* Fuzzy routing */}
      <Route path="/fuzzy_time_series/uod_interval" element={<Interval />} />
      <Route path="/fuzzy_time_series/fuzzy_set" element={<Fuzzyset />} />
      <Route path="/fuzzy_time_series/fuzzifikasi" element={<Fuzzification />} />
      <Route path="/fuzzy_time_series/flr" element={<Flr />} />
      <Route path="/fuzzy_time_series/flrg" element={<Flrg />} />
      <Route path="/fuzzy_time_series/pembobotan" element={<Pembobotan />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};

export default MainRoutes;
