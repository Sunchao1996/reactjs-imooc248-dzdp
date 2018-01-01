import * as ActionTypes from '../constants/store';

const initialState = [];

export default function store(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.STORE_ADD:
            state.unshift(action.data);
            return state;
        case ActionTypes.STORE_UPDATE:
            return action.data;
        case ActionTypes.STORE_RM:
            return state.filter(function (item) {
                if (item.id !== action.data.id) {
                    return item;
                }
            })
        default:
            return state;
    }
}