import Router from 'koa-router';

import { resultUpdate } from '../api/result/resultUpdate';
import { resultDelete } from '../api/result/resultDelete';
import { resultGet } from '../api/result/resultGet';
import { resultGetAll } from '../api/result/resultGelAll';

import { resultMiddleware } from '../middleware/resultMiddleware';

const routerResult = new Router({
  prefix: '/api/result',
});

routerResult.get('/', resultGetAll);
routerResult.get('/:id', resultGet);
routerResult.put('/', resultMiddleware, resultUpdate);
routerResult.delete('/', resultMiddleware, resultDelete);

export default routerResult;
