import { DATA_FUZZIFIKASI_TYPES } from "../actions/dataFuzzifikasi.action";

const initialState = {
  dataRedevidedFuzzifikasi: null,
};

const dataRedevidedFuzzifikasiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FUZZIFIKASI_TYPES.GET_DATA_REDEVIDED_FUZZIFIKASI:
      return {
        dataRedevidedFuzzifikasi: {
          head: ["Waktu", "Data Aktual", "Interval", "Fuzzifikasi"],
          body: action.payload.response,
        },
      };

    default:
      return state;
  }
};

export default dataRedevidedFuzzifikasiReducer;
