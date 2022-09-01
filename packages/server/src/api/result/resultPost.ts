import Result from '../../modules/result/ResultModel';

import { getResultApi } from './resultGet';

import { validateResultApi } from './resultUtils';

export const resultPost = async ctx => {
  const { result = null } = ctx.request.body;

  if (!result) {
    ctx.status = 400;
    ctx.body = {
      message: 'Result is required',
    };
    return;
  }

  const { result: resultValidated, error } = await validateResultApi(result);

  if (error) {
    ctx.status = 400;
    ctx.body = {
      message: error,
    };
    return;
  }

  const { result: resultExist } = await getResultApi({ repositoryName: resultValidated?.repositoryName });

  if (resultExist) {
    ctx.status = 400;
    ctx.body = {
      message: 'Repository name already in use',
    };
    return;
  }

  try {
    const resultNew = await new Result({
      ...resultValidated,
    }).save();

    const { result: resultNormalized, error } = await getResultApi({ id: resultNew._id });

    if (error) {
      ctx.status = 400;
      ctx.body = {
        message: error,
      };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      result: resultNormalized,
    };

    return;
  } catch (err) {
    // eslint-disable-next-line
    console.log('err: ', err);

    ctx.status = 500;
    ctx.body = {
      message: 'Unknown error',
    };
  }
};
