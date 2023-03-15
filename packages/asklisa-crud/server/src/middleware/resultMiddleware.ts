import { getResultApi } from '../api/result/resultGet';

export const resultMiddleware = async (ctx, next) => {
  const { authorization } = ctx.header;

  if (!authorization) {
    ctx.status = 401;
    ctx.body = {
      message: 'Result Id Not Found',
    };
    return;
  }

  const { result } = await getResultApi({ id: String(authorization) });

  if (!result) {
    ctx.status = 401;
    ctx.body = {
      message: 'Result Not Found',
    };
    return;
  }

  ctx.result = result;

  await next();
};
