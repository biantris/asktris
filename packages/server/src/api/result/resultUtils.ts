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
  findings: yup.string().required(),
});

export const validateResultApi = async (apiResult: ApiResult) => {
  try {
    await resultSchema.validate(apiResult);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return {
        error: err.message,
        user: null,
      };
    }

    return {
      err,
      user: null,
    };
  }

  return {
    user: apiResult,
    error: null,
  };
};

const resultUpdateSchema = yup.object().shape({
  repositoryName: yup.string().required(),
  status: yup.string().required(),
  findings: yup.string().required(),
});

export const validateResultUpdateApi = async (apiResult: ApiResult) => {
  try {
    await resultUpdateSchema.validate(apiResult);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return {
        error: err.message,
        user: null,
      };
    }

    return {
      err,
      user: null,
    };
  }

  return {
    user: apiResult,
    error: null,
  };
};
