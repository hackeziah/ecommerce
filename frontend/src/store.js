

import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const middleware = compose(applyMiddleware(promiseMiddleware, logger, ReduxThunk))

export default createStore(reducers, middleware)