import {get} from '../get';

export function getSearchData(page,cityName,category,keyword){
    var url = '/api/search/'+page+'/'+cityName+'/'+category+'/'+(keyword ? keyword:'');
    var result = get(url);
    return result;
}