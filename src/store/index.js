import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from '../middleware'

export default function configureStore() {
    let middleware = [thunkMiddleware, apiMiddleware];

    if (process.env.NODE_ENV === 'development') {
        middleware.push(createLogger());
    }

    const rootReducers = combineReducers({ ...reducer });
    const composeMiddleware = applyMiddleware(...middleware);

    const store = createStore(
        rootReducers,
        composeMiddleware
    );

    return store;
}