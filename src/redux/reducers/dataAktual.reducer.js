import { DATA_AKTUAL_TYPES } from "../actions/dataAktual.action";

const initialState = {
  dataAktual: null,
};

const dataAktualReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_AKTUAL_TYPES.GET_DATA_AKTUAL:
      return {
        dataAktual: action.payload.response,
      };

    default:
      return state;
  }
};

export default dataAktualReducer;
