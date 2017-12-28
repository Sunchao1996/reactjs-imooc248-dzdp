var router = require('koa-router')();
var app = require('koa')();

//首页-广告（超值特惠）
router.get('/api/homead', function*(next) {
    var homeAdData = require('./home/ad.js');
    this.body = homeAdData;
});


//首页-推荐列表
router.get('/api/homelist/:city/:page', function (next) {
    var homeListData = require('./home/list.js');
    //参数
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市' + paramsCity);
    console.log('当前页数' + paramsPage);

    this.body = homeListData
});

app.use(router.routes());

app.listen(3000, function () {
    console.log('listen 3000...')
});
