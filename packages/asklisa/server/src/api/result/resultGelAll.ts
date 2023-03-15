/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Result from '../../modules/result/ResultModel';

import { getPageInfo, getSkipAndLimit } from '../apiHelpers';

import { resultSelection } from './resultGet';

export const resultGetAll = async ctx => {
  const { skip, limit } = getSkipAndLimit(ctx);
  try {
    //@ts-ignore
    const results = await Result.find({
      removedAt: null,
    })
      .skip(skip)
      .limit(limit)
      .select(resultSelection)
      .lean();

    const pageInfo = await getPageInfo(ctx, Result);

    if (pageInfo.errors) {
      ctx.status = 422;
      ctx.body = {
        errors: pageInfo.errors,
      };

      return;
    }

    ctx.status = 200;
    ctx.body = {
      pageInfo,
      results,
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
