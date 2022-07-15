import { DATA_INTERVAL_TYPES } from "../actions/dataInterval.action";

const initialState = {
  dataInterval: null,
};

const dataIntervalReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_INTERVAL_TYPES.GET_DATA_INTERVAL:
      return {
        dataInterval: action.payload.response,
      };

    default:
      return state;
  }
};

export default dataIntervalReducer;
