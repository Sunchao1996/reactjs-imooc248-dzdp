import * as UserInfo from '../constants/userinfo';

export const login = function (data){
    return {
        type:UserInfo.USERINFO_LOGIN,
        data
    }
}