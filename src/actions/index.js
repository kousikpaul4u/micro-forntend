import { common } from "constants/ActionTypes";

export const setInitialState = () => ({
    type: common.SET_INITIAL_STATE,
    payload: null
});

export const showLoader = () => ({
    type: common.SET_LOADER,
    payload: true
});

export const hideLoader = () => ({
    type: common.SET_LOADER,
    payload: false
});

export const addError = error => ({
    type: common.SET_ERROR,
    payload: error
});

export const addSuccess = message => ({
    type: common.SET_SUCCESS,
    payload: message
});

export const removeError = () => ({
    type: common.SET_ERROR,
    payload: ""
});

export const removeSuccess = () => ({
    type: common.SET_SUCCESS,
    payload: ""
});

export const search = message => ({
    type: common.SEARCH,
    payload: message
});

export const setError = (error, resetInitialState = true) => {
    return (dispatch) => {
        if (resetInitialState) {
            dispatch(setInitialState());
        }
        dispatch(addError(error));
    };
};

export const setSuccess = (message, resetInitialState = true) => {
    return (dispatch) => {
        if (resetInitialState) {
            dispatch(setInitialState());
        }
        dispatch(addSuccess(message));
    };
};
