import koa from 'koa';
import koaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';

const app = new koa();

app.use(json());
app.use(bodyParser());

const router = new koaRouter();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello, world!' };

  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000);
