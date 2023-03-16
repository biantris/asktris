import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from 'koa-router';
import cors from 'koa-cors';

import { version } from '../package.json';

import routerResult from '../../server/src/routes/resultRoutes';

import { resultPost } from './api/result/resultPost';

const app = new Koa();

const routerOpen = new Router();

app.use(logger());
app.use(cors({ maxAge: 86400 }));
app.use(bodyParser());

routerOpen.get('/api/version', ctx => {
  ctx.status = 200;
  ctx.body = {
    status: 'OK',
    version,
  };
});

routerOpen.post('/api/result', resultPost);

app.use(routerOpen.routes());
app.use(routerResult.routes());

app.use(ctx => {
  ctx.status = 404;
});

export default app;
