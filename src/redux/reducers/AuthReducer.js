import { LOGIN_SUCCESS, LOGIN_FAIL, LOADING_USER, SIGNOUT_USER_FAIL, UPDATE_ALERT_MESSAGE, GETTING_PROFILE_SUCCESSFUL, GETTING_PROFILE_FAIL, } from '../Types';

const INITIAL_STATE = {
    loadingUser: false,
    error: [],
    userData: {},
    alertMessage: null,
    profile: null,
    profileError: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LOADING_USER:
            return { ...state, loadingUser: true, error: [] };
        case LOGIN_SUCCESS:
            return { ...state, userData: payload, loadingUser: false };
        case LOGIN_FAIL:
            return { ...state, error: payload, userData: {}, loadingUser: false };
        case SIGNOUT_USER_FAIL:
            return { ...state, error: payload };
        case UPDATE_ALERT_MESSAGE:
            return { ...state, alertMessage: payload }
        case GETTING_PROFILE_SUCCESSFUL:
            return { ...state, profile: payload }
        case GETTING_PROFILE_FAIL:
            return { ...state, profileError: payload }


        default:
            return state;
    }
};