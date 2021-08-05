import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG
} from "./types";

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading(true);
//
//         const res = await fetch("/logs");
//         const data = await res.data;
//         dispatch({type: GET_LOGS, payload: data});
//     };
// };

export const getLogs = () => async dispatch => {

    try {
        setLoading();

        const res = await fetch("/logs");
        const data = await res.json();
        dispatch({type: GET_LOGS, payload: data});
    } catch (e) {
        dispatch({type: LOGS_ERROR, payload: e.response.data});
    }

};

// delete log from server
export const deleteLog = (id) => async dispatch => {

    try {
        setLoading();

        await fetch(`/log/${id}`, {
            method: "DELETE"
        });
        dispatch({type: DELETE_LOG, payload: id});
    } catch (e) {
        dispatch({type: LOGS_ERROR, payload: e.response.data});
    }

};

// add new log
export const addLog = (log) => async dispatch => {

    try {
        setLoading();

        const res = await fetch("/logs", {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        dispatch({type: ADD_LOG, payload: data});
    } catch (e) {
        dispatch({type: LOGS_ERROR, payload: e.response.data});
    }

};

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}