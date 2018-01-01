import {get} from '../get';

//获取广告数据
export function getAdData() {
    var result = get('/api/homead');
    return result;
}

//获取列表
export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
    return result;
}