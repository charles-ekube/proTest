import { ADDING_LOAN_DATA, ADDING_LOAN_DATA_FAIL, ADDING_LOAN_DATA_SUCCESS, ADDING_PREFERENCE, ADDING_PREFERENCE_FAIL, ADDING_PREFERENCE_SUCCESS, GETTING_LOAN_DATA, GETTING_LOAN_DATA_FAIL, GETTING_LOAN_DATA_SUCCESS, GETTING_PREFERENCE, GETTING_PREFERENCE_FAIL, GETTING_PREFERENCE_SUCCESS } from "../Types";


const INITIAL_STATE = {
    adding_preference: false,
    preference_data: {},
    interest_data: {},
    get_preference_data: {},
    get_loan_data: {},
    error: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADDING_PREFERENCE:
            return { ...state, adding_preference: true, error: [] };
        case ADDING_PREFERENCE_SUCCESS:
            return { ...state, preference_data: payload, adding_preference: false };
        case ADDING_PREFERENCE_FAIL:
            return { ...state, error: payload, preference_data: {}, adding_preference: false };
        case ADDING_LOAN_DATA:
            return { ...state, adding_preference: true, error: [] };
        case ADDING_LOAN_DATA_SUCCESS:
            return { ...state, interest_data: payload, adding_preference: false };
        case ADDING_LOAN_DATA_FAIL:
            return { ...state, error: payload, interest_data: {}, adding_preference: false };
        case GETTING_LOAN_DATA:
            return { ...state, adding_preference: true, error: [] };
        case GETTING_LOAN_DATA_SUCCESS:
            return { ...state, get_loan_data: payload, adding_preference: false };
        case GETTING_LOAN_DATA_FAIL:
            return { ...state, error: payload, get_loan_data: {}, adding_preference: false };
        case GETTING_PREFERENCE:
            return { ...state, adding_preference: true, error: [] };
        case GETTING_PREFERENCE_SUCCESS:
            return { ...state, get_preference_data: payload, adding_preference: false };
        case GETTING_PREFERENCE_FAIL:
            return { ...state, error: payload, get_preference_data: {}, adding_preference: false };
        default:
            return state;
    }
};