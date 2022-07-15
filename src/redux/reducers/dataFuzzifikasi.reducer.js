import { DATA_FUZZIFIKASI_TYPES } from "../actions/dataFuzzifikasi.action";

const initialState = {
  dataFuzzifikasi: null,
};

const dataIntervalReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FUZZIFIKASI_TYPES.GET_DATA_FUZZIFIKASI:
      return {
        dataFuzzifikasi: action.payload.response,
      };

    default:
      return state;
  }
};

export default dataIntervalReducer;
