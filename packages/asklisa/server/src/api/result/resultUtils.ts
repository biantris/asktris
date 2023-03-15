import * as yup from 'yup';

import { IFindings } from '../../modules/result/ResultModel';

type ApiResult = {
  repositoryName: string;
  status: string;
  findings: IFindings;
};

const resultSchema = yup.object().shape({
  repositoryName: yup.string().required(),
  status: yup.string().required(),
  findings: yup.array().required(),
});

export const validateResultApi = async (apiResult: ApiResult) => {
  try {
    await resultSchema.validate(apiResult);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return {
        error: err.message,
        result: null,
      };
    }

    return {
      err,
      result: null,
    };
  }

  return {
    result: apiResult,
    error: null,
  };
};

const resultUpdateSchema = yup.object().shape({
  repositoryName: yup.string().required(),
  status: yup.string().required(),
  findings: yup.array().required(),
});

export const validateResultUpdateApi = async (apiResult: ApiResult) => {
  try {
    await resultUpdateSchema.validate(apiResult);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return {
        error: err.message,
        result: null,
      };
    }

    return {
      err,
      result: null,
    };
  }

  return {
    result: apiResult,
    error: null,
  };
};
