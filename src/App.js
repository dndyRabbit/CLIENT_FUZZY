import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import CustomRouter from "./customRouter/main.routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";

import { getDataAktual } from "./redux/actions/dataAktual.action";
import {
  getDataInterval,
  getModIntervalData,
  getRedevidedIntervalData,
} from "./redux/actions/dataInterval.action";
import { getDataFuzzyset } from "./redux/actions/dataFuzzyset.action";
import { getDataFuzzifikasi } from "./redux/actions/dataFuzzifikasi.action";
import { getDataFLR } from "./redux/actions/dataFlr.action";
import { getDataFLRG } from "./redux/actions/dataFlrg.action";
import AmountOfInterval2 from "./utils/amountOfInterval2";
import AmountOfInterval from "./utils/amountOfInterval";
import Redevided from "./utils/redevided";
import RedevidedAmountOfInterval from "./utils/redevidedAmountOfInterval";
import { getRedevidedFuzzifikasi } from "./redux/actions/dataRedevidedFuzzifikasi";

function App() {
  return (
    <Router>
      <CustomRouter />
      <ToastContainer autoClose={2000} />
    </Router>
  );
}

export default App;
