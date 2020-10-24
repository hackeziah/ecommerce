import axios from 'axios';
import { GET_CATEGORIES_ALL, GET_FIL_CAT_PROD, GET_ORD_PROD_BY_DATE, GET_PRODUCTS_ALL, GET_PRODUCT_FIL_CAT, GET_PRODUCT_LIST, GET_PRODUCT_ORDER_NO, GET_SLIDER_ALL, REGISTER_FAIL, REGISTER_SUCCESS } from './types';
const URL = 'http://127.0.0.1:8000/';
export const getAllSliders = async () => {
    const request = await axios.get(`${URL}api/slider`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })

    return (dispatch) => {
        dispatch({
            type: GET_SLIDER_ALL,
            payload: request
        })

    }
};


//////////////////////////////=PRODUCTS=///////////////////////////////////////////
//SEARCH
export const getProductList = async (keys) => {
    const request = await axios.get(`${URL}api/products/?search=${keys}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCT_LIST,
            payload: request
        })

    }
}
//FILTERS - Category
export const getProductFilByCat = async (keys) => {

    const request = await axios.get(`${URL}api/products/?category=${keys}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCT_FIL_CAT,
            payload: request
        })

    }
}



export const getProductOrderByCat = async (keys) => {
    const request = await axios.get(`${URL}api/products/?ordering=${keys}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCT_ORDER_NO,
            payload: request
        })

    }
}
//FILTERS


export const getAllProducts = async () => {
    const request = axios.get(`${URL}api/products`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCTS_ALL,
            payload: request
        })

    }
}
//////////////////////////////=PRODUCTS=///////////////////////////////////////////
//////////////////////////////=CATEGORY=///////////////////////////////////////////
export const getAllCategory = async () => {
    const request = await axios.get(`${URL}api/categories`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })

    return (dispatch) => {
        dispatch({
            type: GET_CATEGORIES_ALL,
            payload: request
        })

    }
};

export const getFilterProdByCat = async (keys) => {
    const request = await axios.get(`${URL}api/products/?category=${keys}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })

    return (dispatch) => {
        dispatch({
            type: GET_FIL_CAT_PROD,
            payload: request
        })

    }
};


export const getOrderByDate = async (keys) => {
    const request = await axios.get(`${URL}api/products/?ordering=${keys}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })

    return (dispatch) => {
        dispatch({
            type: GET_ORD_PROD_BY_DATE,
            payload: request
        })

    }
};

//////////////////////////////=CATEGORY=///////////////////////////////////////////



//////////////////////////////=USERS=///////////////////////////////////////////
// http://127.0.0.1:8000/api/accounts/register

// export const login = (email, password) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ email, password });

//     try {
//         const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, body, config);

//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         });

//         dispatch(setAlert('Authenticated successfully', 'success'));
//     } catch (err) {
//         dispatch({
//             type: LOGIN_FAIL
//         });

//         dispatch(setAlert('Error Authenticating', 'error'));
//     }
// };

export const register = (data) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(data);

    try {
        const res = await axios.post(`${URL}api/accounts/register`, body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });

        // console.log(err)
    }
};
//////////////////////////////=USERS=///////////////////////////////////////////
// export const logout = () => dispatch => {
//     dispatch(setAlert('logout successful.', 'success'));
//     dispatch({ type: LOGOUT });
// }

// export const addBasket= ()=> dispatch => {

// }