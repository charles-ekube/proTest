import { combineReducers } from 'redux';
import { SIGNOUT_USER_SUCCESSFUL } from '../Types';
import AuthReducer from './AuthReducer';
import EquipmentsReducer from './EquipmentsReducer';
import LoansReducers from './LoansReducers';

const appReducer = combineReducers({
    auth: AuthReducer,
    equipments: EquipmentsReducer,
    loans: LoansReducers,
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === SIGNOUT_USER_SUCCESSFUL) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;