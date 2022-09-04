/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { checkObjectId } from '../apiHelpers';

import Result from '../../modules/result/ResultModel';

import { getResultApi } from './resultGet';

export const resultDelete = async ctx => {
  const { result } = ctx.request.body;

  const resultData = ctx.result;

  const findResult = await Result.findOne({
    _id: resultData._id,
    removedAt: null,
  });

  const findResultId = checkObjectId(resultData._id);

  if (!findResultId && !findResult) {
    ctx.status = 400;
    ctx.body = {
      message: 'Result not found',
    };
    return;
  }

  try {
    await Result.deleteOne({
      _id: resultData._id,
    });

    const { result: resultUpdated, error } = await getResultApi({ id: resultData._id, isDelete: true });

    if (error) {
      ctx.status = 400;
      ctx.body = {
        message: 'Error while deleting result',
      };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      result: resultUpdated,
      message: 'Result removed successfully',
    };
  } catch (err) {
    // eslint-disable-next-line
    console.log('err: ', err);

    ctx.status = 500;
    ctx.body = {
      message: 'Unknown error',
    };
  }
};
