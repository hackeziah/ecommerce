import { GET_FIL_CAT_PROD, GET_ORD_PROD_BY_DATE, GET_PRODUCTS_ALL, GET_PRODUCT_FIL_CAT, GET_PRODUCT_LIST, GET_PRODUCT_ORDER_NO } from '../actions/types';
export default function (state = {}, action) {

    switch (action.type) {
        case GET_PRODUCTS_ALL:
            return { ...state, products: action.payload }
        case GET_PRODUCT_LIST:
            return { ...state, products: action.payload }
        case GET_PRODUCT_FIL_CAT:
            return { ...state, products: action.payload }
        case GET_PRODUCT_ORDER_NO:
            return { ...state, products: action.payload }
        case GET_FIL_CAT_PROD:
            return { ...state, products: action.payload }
        case GET_ORD_PROD_BY_DATE:
            return { ...state, products: action.payload }

        // case 'GET_ARTISTS_ALL':
        //     return { ...state, artistList: action.payload }
        // case 'GET_ARTISTS_DETAIL':
        //     return { ...state, artistData: action.payload }
        // case 'CLEAR_ARTIST_DETAIL':
        //     return { ...state, artistData: action.payload }
        default:
            return state;
    }
}