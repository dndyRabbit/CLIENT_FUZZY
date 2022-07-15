// http://localhost:2022/api/get_data_aktual
import { getDataAPI } from "../../utils/fetchData";
import { toast } from "react-toastify";

export const DATA_FLR_TYPES = {
  LOADING: "LOADING",
  GET_DATA_FLR: "GET_DATA_FLR",
};

export const getDataFLR = () => async (dispatch) => {
  try {
    const res = await getDataAPI(`get_flr_data`);

    dispatch({
      type: DATA_FLR_TYPES.GET_DATA_FLR,
      payload: { response: res.data },
    });
  } catch (err) {
    console.log(err);
  }
};
