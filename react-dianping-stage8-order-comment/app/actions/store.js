import * as ActionTypes from '../constants/store';

export function add(data) {
    return {
        type: ActionTypes.STORE_ADD,
        data
    }
}
export function update(item) {
    return {
        type: ActionTypes.STORE_UPDATE,
        data:item
    }
}
export function rm(item) {
    return {
        type: ActionTypes.STORE_RM,
        data:item
    }
}