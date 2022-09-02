import Result from '../../modules/result/ResultModel';

import { validateResultUpdateApi } from './resultUtils';

import { getResultApi } from './resultGet';

export const resultUpdate = async ctx => {
  const { result } = ctx.request.body;

  const resultData = ctx.result;

  const findResult = await Result.findOne({
    _id: resultData._id,
    removedAt: null,
  });

  if (!findResult) {
    ctx.status = 400;
    ctx.body = {
      message: 'Result not found',
    };
    return;
  }

  const { result: resultValidated, error } = await validateResultUpdateApi(result);

  if (error) {
    ctx.status = 400;
    ctx.body = {
      message: error,
    };
    return;
  }

  const { result: resultExist } = await getResultApi({ repositoryName: resultValidated?.repositoryName });

  if (resultExist && result.repositoryName !== resultExist?.repositoryName) {
    ctx.status = 400;
    ctx.body = {
      message: 'repositoryName already in use',
    };
    return;
  }

  try {
    for (const index in result) {
      if (typeof result[index] === 'undefined') {
        delete result[index];
      }
    }

    const resultUpdated = await Result.findOneAndUpdate(
      {
        _id: resultData._id,
      },
      {
        $set: result,
      },
      {
        new: true,
      },
    );

    if (!resultUpdated?._id) {
      ctx.status = 500;
      ctx.body = {
        message: 'Internal server error',
      };
      return;
    }

    const { result: resultNormalized, error } = await getResultApi({ id: resultUpdated._id });

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
      message: 'Result updated successfully',
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
