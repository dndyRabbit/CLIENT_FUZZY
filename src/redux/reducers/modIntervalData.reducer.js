import { DATA_INTERVAL_TYPES } from "../actions/dataInterval.action";

const initialState = {
  dataModInterval: null,
};

const modIntervalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_INTERVAL_TYPES.GET_MOD_DATA_INTERVAL:
      return {
        dataModInterval: {
          head: ["Universe", "Batas Bawah", "Batas Atas", "Median"],
          body: action.payload.response,
        },
      };

    default:
      return state;
  }
};

export default modIntervalDataReducer;
