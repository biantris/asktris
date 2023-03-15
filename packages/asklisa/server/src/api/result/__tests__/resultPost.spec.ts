import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  createApiCall,
  sanitizeTestObject,
} from '../../../../test';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

const url = '/api/result';

it('should return error if result it was not passed', async () => {
  const response = await createApiCall({ url, payload: {} });

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('Result is required');
  expect(response.body).toMatchSnapshot();
});

it('should return error if result repositoryName it was not passed', async () => {
  const result = {
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
  };

  const response = await createApiCall({
    url,
    payload: { result },
  });

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('repositoryName is a required field');
  expect(response.body).toMatchSnapshot();
});

it('should return error if result status it was not passed', async () => {
  const result = {
    repositoryName: 'Result Name',
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
  };

  const response = await createApiCall({
    url,
    payload: { result },
  });

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('status is a required field');
  expect(response.body).toMatchSnapshot();
});

it('should return error if result findings it was not passed', async () => {
  const result = {
    repositoryName: 'Result Name',
    status: 'Queued',
    password: '123456',
  };

  const response = await createApiCall({
    url,
    payload: { result },
  });

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('findings is a required field');
  expect(response.body).toMatchSnapshot();
});

it('should create result with success', async () => {
  const result = {
    repositoryName: 'Result Name',
    status: 'Queued',
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
  };

  const response = await createApiCall({
    url,
    payload: { result },
  });

  expect(response.status).toBe(200);
  expect(response.body.result.repositoryName).toBe(result.repositoryName);
  expect(response.body.result.status).toBe(result.status);

  expect(sanitizeTestObject(response.body)).toMatchSnapshot();
});
