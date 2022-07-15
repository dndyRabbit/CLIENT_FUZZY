import { combineReducers } from "redux";

import dataAktual from "./dataAktual.reducer";
import dataInterval from "./dataInterval.reducer";
import dataFuzzyset from "./dataFuzzyset.reducer";
import dataFuzzifikasi from "./dataFuzzifikasi.reducer";
import dataFlr from "./dataFlr.reducer";
import dataFlrg from "./dataFlrg.reducer";
import dataRedevidedFuzzifikasi from "./dataRedevidedFuzzifikasi.reducer";
import dataModInterval from "./modIntervalData.reducer";
import dataRedevidedInterval from "./redevidedIntervalData.reducer";

export default combineReducers({
  dataAktual,
  dataInterval,
  dataFuzzyset,
  dataFuzzifikasi,
  dataFlr,
  dataFlrg,
  dataRedevidedFuzzifikasi,
  dataModInterval,
  dataRedevidedInterval,
});
