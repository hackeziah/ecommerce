import { v4 as uuid } from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from './types';

export const setAlert = (title, msg, alertType, timeout = 3000) => dispatch => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { title, msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}
