import { createUpdateApiCall } from '../../../../test/restUtils';
import { clearDbAndRestartCounters, connectMongoose, disconnectMongoose } from '../../../../test';
import { createResult } from '../../../modules/result/fixtures/createResult';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

const url = '/api/result';

it('should return error if result repository name it was not passed', async () => {
  const result = await createResult({});

  const authorization = result._id;

  const response = await createUpdateApiCall({
    url,
    authorization,
    payload: {
      result: {
        status: 'Queued',
        password: '123456',
        findings: [
          {
            type: 'sast',
            ruleId: 'G402',
            location: {
              path: 'connectors/apigateway.go',
              positions: {
                begin: {
                  line: 60,
                },
              },
            },
            metadata: {
              description: 'TLS InsecureSkipVerify set true.',
              severity: 'HIGH',
            },
          },
        ],
      },
    },
  });

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('repositoryName is a required field');
  expect(response.body).toMatchSnapshot();
});

it('should updated result with success', async () => {
  const result = await createResult({
    repositoryName: 'Repo Name',
    status: 'Queued',
    password: '123456',
    findings: [
      {
        type: 'sast',
        ruleId: 'G402',
        location: {
          path: 'connectors/apigateway.go',
          positions: {
            begin: {
              line: 60,
            },
          },
        },
        metadata: {
          description: 'TLS InsecureSkipVerify set true.',
          severity: 'HIGH',
        },
      },
    ],
  });

  const authorization = result._id;

  const response = await createUpdateApiCall({
    url,
    authorization,
    payload: {
      result: {
        repositoryName: 'Repo Name 2',
        status: 'Queued',
        password: '123456',
        findings: [
          {
            type: 'sast',
            ruleId: 'G403',
            location: {
              path: 'connectors/apigateway.go',
              positions: {
                begin: {
                  line: 60,
                },
              },
            },
            metadata: {
              description: 'TLS InsecureSkipVerify set true. 2',
              severity: 'HIGH',
            },
          },
        ],
      },
    },
  });

  expect(response.status).toBe(200);
  expect(response.body.result.repositoryName).toBe('Repo Name 2');
  expect(response.body.message).toBe('Result updated successfully');
});
