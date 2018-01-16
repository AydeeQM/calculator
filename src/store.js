import createStore from 'redux-zero';
import {list, buttons} from './Database';

const initialState = {
    list: list,
    buttons: buttons,
    result: "0",
    calculation: "",
    power: true,
    reset: false,
};

const store = createStore(initialState);
export default store;