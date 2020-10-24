import { combineReducers } from 'redux';
import alert from './alert_reducers';
import auth from './auth_reducers';
import categories from './categories_reducers';
import products from './products_reducers';
import sliders from './sliders_reducers';
import users from './users_reducers';

const rootReducer = combineReducers({
    products,
    sliders,
    categories,
    users,
    alert,
    auth,
    // basket
})

export default rootReducer;