import { DATA_INTERVAL_TYPES } from "../actions/dataInterval.action";

const initialState = {
  dataRedevidedInterval: null,
};

const redevidedIntervalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_INTERVAL_TYPES.GET_REDEVIDED_DATA_INTERVAL:
      return {
        dataRedevidedInterval: {
          head: ["Universe", "Batas Bawah", "Batas Atas", "Median"],
          body: action.payload.response,
        },
      };

    default:
      return state;
  }
};

export default redevidedIntervalDataReducer;
