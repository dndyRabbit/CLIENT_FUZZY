import { DATA_FUZZYSET_TYPES } from "../actions/dataFuzzyset.action";

const initialState = {
  dataFuzzyset: null,
};

const dataIntervalReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FUZZYSET_TYPES.GET_DATA_FUZZSYSET:
      return {
        dataFuzzyset: action.payload.response,
      };

    default:
      return state;
  }
};

export default dataIntervalReducer;
