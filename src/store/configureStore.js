import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers/cart';

export default () => {
    const store = createStore(
        cartReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

