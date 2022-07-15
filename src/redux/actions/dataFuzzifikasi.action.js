// http://localhost:2022/api/get_data_aktual
import { getDataAPI } from "../../utils/fetchData";
import { toast } from "react-toastify";

export const DATA_FUZZIFIKASI_TYPES = {
  LOADING: "LOADING",
  GET_DATA_FUZZIFIKASI: "GET_DATA_FUZZIFIKASI",
  GET_DATA_REDEVIDED_FUZZIFIKASI: "GET_DATA_REDEVIDED_FUZZIFIKASI",
};

export const getDataFuzzifikasi = () => async (dispatch) => {
  try {
    const res = await getDataAPI(`get_fuzzifikasi_data`);

    dispatch({
      type: DATA_FUZZIFIKASI_TYPES.GET_DATA_FUZZIFIKASI,
      payload: { response: res.data },
    });
  } catch (err) {
    console.log(err);
  }
};
