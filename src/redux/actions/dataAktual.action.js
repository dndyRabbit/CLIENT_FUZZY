// http://localhost:2022/api/get_data_aktual
import { getDataAPI } from "../../utils/fetchData";
import { toast } from "react-toastify";

export const DATA_AKTUAL_TYPES = {
    LOADING:'LOADING',
    GET_DATA_AKTUAL:"GET_DATA_AKTUAL"
}

export const getDataAktual = () => async (dispatch)  => {
    try {
        const res = await getDataAPI(`get_data_aktual`);

        dispatch({
            type:DATA_AKTUAL_TYPES.GET_DATA_AKTUAL,
            payload:{response: res.data}
        })

    } catch (err) {
        console.log(err)
    }
}