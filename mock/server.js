var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var koaBody = require('koa-body')();

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);