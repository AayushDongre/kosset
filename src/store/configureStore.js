import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers/cart';


const loadFromLocalStorage = () => {
    try {
        const statePrev = localStorage.getItem('state')
        if(statePrev === null) return undefined
        return JSON.parse(statePrev)
    } catch (err) {
        console.log(err)
        return err;
    }
}

const prevState = loadFromLocalStorage()

export default () => {
    const store = createStore(
        cartReducer,
        prevState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

