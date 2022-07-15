// http://localhost:2022/api/get_data_aktual
import { toast } from "react-toastify";
import { DATA_FUZZIFIKASI_TYPES } from "./dataFuzzifikasi.action";

export const getRedevidedFuzzifikasi = (data) => async (dispatch) => {
  try {
    dispatch({
      type: DATA_FUZZIFIKASI_TYPES.GET_DATA_REDEVIDED_FUZZIFIKASI,
      payload: { response: data },
    });
  } catch (err) {
    console.log(err);
  }
};
