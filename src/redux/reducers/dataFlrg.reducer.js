import { DATA_FLRG_TYPES } from "../actions/dataFlrg.action";

const initialState = {
  dataFlrg: null,
};

const dataFLRGReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FLRG_TYPES.GET_DATA_FLRG:
      return {
        dataFlrg: action.payload.response,
      };

    default:
      return state;
  }
};

export default dataFLRGReducer;
