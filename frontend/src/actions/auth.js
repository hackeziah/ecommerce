import axios from 'axios';
import { setAlert } from './alert';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
const URL = 'http://127.0.0.1:8000/';
export const login = (data) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify(data);

    try {
        const res = await axios.post(`${URL}api/token/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        setAlert('Done', 'Your Now Login', 'success')


    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch(setAlert('Error Found', 'Authentication Error', 'error'));

    }
};

export const logout = () => dispatch => {
    dispatch(setAlert('logout successful.', 'success'));
    dispatch({ type: LOGOUT });
}
