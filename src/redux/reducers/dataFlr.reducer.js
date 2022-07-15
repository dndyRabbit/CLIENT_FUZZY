import { DATA_FLR_TYPES } from "../actions/dataFlr.action";

const initialState = {
  dataFlr: null,
};

const dataAktualReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FLR_TYPES.GET_DATA_FLR:
      return {
        dataFlr: action.payload.response,
      };

    default:
      return state;
  }
};

export default dataAktualReducer;
