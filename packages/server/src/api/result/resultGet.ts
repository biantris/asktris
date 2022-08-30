/* eslint-disable no-console */
import { getObjectId } from '../../../test';

import ResultModel, { IFindings } from './../../modules/result/ResultModel';

export const resultSelection = {
  _id: 1,
  repositoryName: 1,
  status: 1,
  findings: 1,
};

type ResultPayload = {
  _id: string;
  repositoryName: string;
  status: string;
  findings: IFindings;
};

type GetResultApiPayload = {
  error: string | null;
  result: ResultPayload | null;
};

const getConditions = (id?: string, repositoryName?: string) => {
  if (id) {
    return {
      error: null,
      conditions: {
        _id: getObjectId(id),
      },
    };
  }

  if (repositoryName) {
    return {
      error: null,
      conditions: {
        repositoryName,
      },
    };
  }

  return {
    error: 'Invalid result',
  };
};

interface IGetResultAPI {
  id?: string;
  repositoryName?: string;
  isDelete?: boolean;
}

export const getResultApi = async ({ repositoryName, id, isDelete }: IGetResultAPI): Promise<GetResultApiPayload> => {
  const { conditions, error } = getConditions(id, repositoryName);

  if (error) {
    return {
      error,
      result: null,
    };
  }

  let result;
  if (isDelete) {
    result = await ResultModel.findOne({
      ...conditions,
    })
      .select('-password -createdAt -updatedAt')
      .lean();
  } else {
    result = await ResultModel.findOne({
      ...conditions,
    })
      .select(resultSelection)
      .lean();
  }

  if (!result) {
    return {
      error: 'User not found',
      result: null,
    };
  }

  return {
    error: null,
    result,
  };
};

export const resultGet = async ctx => {
  const { id } = ctx.params;

  try {
    if (!id) {
      ctx.status = 400;
      ctx.body = {
        message: 'You must provide an id',
      };
      return;
    }

    const { result, error } = await getResultApi({ id });

    if (error) {
      ctx.status = 400;
      ctx.body = {
        message: error,
      };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      result,
    };

    return;
  } catch (err) {
    console.log('err:', err);

    ctx.body = {
      message: 'Unknown error',
    };
  }
};
