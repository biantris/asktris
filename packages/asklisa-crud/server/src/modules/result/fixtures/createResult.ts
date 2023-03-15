import { getCounter } from '../../../../test';

import Result from '../ResultModel';

export const createResult = async args => {
  const n = getCounter('result');
  const {
    repositoryName = `Result Name ${n}`,
    status = `Queued`,
    findings = [
      {
        type: `sast ${n}`,
        ruleId: `G402 ${n}`,
        location: {
          path: `connectors${n}/apigateway.go`,
          positions: {
            begin: {
              line: `${n}`,
            },
          },
        },
        metadata: {
          description: `TLS InsecureSkipVerify set true. ${n}`,
          severity: `HIGH`,
        },
      },
    ],
    ...payload
  } = args;

  return await new Result({
    repositoryName,
    status,
    findings,
    ...payload,
  }).save();
};
