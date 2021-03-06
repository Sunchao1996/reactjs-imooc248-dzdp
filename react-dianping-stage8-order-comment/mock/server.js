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

//查看商铺详情,图片部分
router.get('/api/detail/info/:id', function (next) {
    var infoData = require('./detail/info.js');
    //参数
    const params = this.params;
    const paramsId = params.id;

    console.log('当前商铺id：' + paramsId);

    this.body = infoData;
});

//查看商铺详情,网友点评部分
router.get('/api/detail/comment/:page/:id', function (next) {
    var commentData = require('./detail/comment.js');
    //参数
    const params = this.params;
    const paramsId = params.id;
    const paramsPage = params.page;

    console.log('当前商铺id：' + paramsId);
    console.log('当前商铺id用户点评页数：' + paramsPage);

    this.body = commentData;
});
//获取用户中心用户购买信息
router.get('/api/orderlist/:username', function (next) {
    var OrderListData = require('./orderlist/orderlist.js');
    //参数
    const params = this.params;
    const paramsUsername = params.username;

    console.log('当前用户：' + paramsUsername);

    this.body = OrderListData;
});
//用来处理post请求，对request的body进行解析，添加"koa-bodyparser": "3.2.0"
const bodyParser = require('koa-bodyparser');
//提交用户评价
router.post('/api/submitComment', function (next) {
    const params = this.params;
    console.log('评价内容：' + this.request.body.comment);
    this.body = {
        errno: 0,
        msg: 'ok'
    };
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000, function () {
    console.log('listen 3000...')
});
