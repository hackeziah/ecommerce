

import { GET_CATEGORIES_ALL } from '../actions/types';
export default function (state = {}, action) {

    switch (action.type) {
        case GET_CATEGORIES_ALL:
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}