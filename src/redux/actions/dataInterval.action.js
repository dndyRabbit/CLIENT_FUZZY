// http://localhost:2022/api/get_data_aktual
import { getDataAPI } from "../../utils/fetchData";
import { toast } from "react-toastify";

export const DATA_INTERVAL_TYPES = {
  LOADING: "LOADING",
  GET_DATA_INTERVAL: "GET_DATA_INTERVAL",
  GET_MOD_DATA_INTERVAL: "GET_MOD_DATA_INTERVAL",
  GET_REDEVIDED_DATA_INTERVAL: "GET_REDEVIDED_DATA_INTERVAL",
};

export const getDataInterval = () => async (dispatch) => {
  try {
    const res = await getDataAPI(`get_interval_data`);

    dispatch({
      type: DATA_INTERVAL_TYPES.GET_DATA_INTERVAL,
      payload: { response: res.data },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getModIntervalData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: DATA_INTERVAL_TYPES.GET_MOD_DATA_INTERVAL,
      payload: { response: data },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getRedevidedIntervalData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: DATA_INTERVAL_TYPES.GET_REDEVIDED_DATA_INTERVAL,
      payload: { response: data },
    });
  } catch (err) {
    console.log(err);
  }
};
