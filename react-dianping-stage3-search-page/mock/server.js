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

    console.log('当前页数' + paramsPage);

    this.body = homeListData
});

//搜索页显示列表
router.get('/api/search/:page/:city/:category/:keyword', function (next) {
    var searchListData = require('./search/list.js');
    //参数
    const params = this.params;
    const paramsCategory = params.category;
    const paramsKeyword = params.keyword;
    const paramsPage = params.page;
    const paramsCity = params.city;

    console.log('当前城市' + paramsCity);
    console.log('当前类别' + paramsCategory);
    console.log('当前关键词' + paramsKeyword);
    console.log('当前页数' + paramsPage);

    this.body = searchListData;
});


app.use(router.routes());

app.listen(3000, function () {
    console.log('listen 3000...')
});
