import * as UserConstants from '../constants/userinfo';

var instialState = {};

export default function userinfo(state = instialState,action){
    switch (action.type){
        case UserConstants.USERINFO_LOGIN:
            return action.data;
        default:
            return state;
    }
}