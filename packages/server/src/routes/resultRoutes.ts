import Router from 'koa-router';

// import { resultUpdate } from '../../api/result/userUpdate';
// import { resultDelete } from '../../api/result/userDelete';
import { resultGet } from '../api/result/resultGet';
// import { resultGetAll } from '../../api/user/userGetAll';

const routerResult = new Router({
  prefix: '/api/result',
});

// routerResult.get('/', resultGetAll);
routerResult.get('/:id', resultGet);
// routerResult.put('/', resultUpdate);
// routerResult.delete('/:id', resultDelete);

export default routerResult;
