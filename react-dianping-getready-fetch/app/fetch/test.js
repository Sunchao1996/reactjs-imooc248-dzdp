import 'whatwg-fetch';
import 'es6-promise';

export function getData(){
    var result = fetch('/api/1',{
        credentials:'include'
    });

    result.then(res=>{
        return res.text();
    }).then(text=>{
        console.log(text);
    });

    result = fetch('/api/2',{
        credentials:'include'
    });

    result.then(res=>{
        return res.json();
    }).then(json=>{
        console.log(json)
    })
}

export function postData(){
    var result = fetch('/api/post',{
        method:'POST',
        credentials:'cors',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:'a=100&b=200'
    })
    result.then(res=>{
        return res.json();
    }).then(json=>{
        console.log(json)
    })
}