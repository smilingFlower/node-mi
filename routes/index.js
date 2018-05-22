"use strict";  
var router = require('koa-router')();

/* GET home page. */
router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})

module.exports = router
