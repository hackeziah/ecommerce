import { REGISTER_FAIL, REGISTER_SUCCESS } from '../actions/types';

const initialState = {
    // token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false
};

export default function (state = initialState, action) {
    // const { type, payload } = action;

    switch (action.type) {

        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                // loading: true
            }
            break
        case REGISTER_FAIL:
            break

        default:
            return state
    }
}
