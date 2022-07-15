// http://localhost:2022/api/get_data_aktual
import { getDataAPI } from "../../utils/fetchData";
import { toast } from "react-toastify";

export const DATA_FUZZYSET_TYPES = {
  LOADING: "LOADING",
  GET_DATA_FUZZSYSET: "GET_DATA_FUZZSYSET",
};

export const getDataFuzzyset = () => async (dispatch) => {
  try {
    const res = await getDataAPI(`get_fuzzyset_data`);

    dispatch({
      type: DATA_FUZZYSET_TYPES.GET_DATA_FUZZSYSET,
      payload: { response: res.data },
    });
  } catch (err) {
    console.log(err);
  }
};
