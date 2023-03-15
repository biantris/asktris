import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  createGetApiCall,
  sanitizeTestObject,
} from '../../../../test';

import { createResult } from '../../../modules/result/fixtures/createResult';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

const getUrl = (id: string) => `/api/result/${id}`;

it('should return error if resulr it was not found', async () => {
  const response = await createGetApiCall({
    url: getUrl('5c42132aa591a2001ad46264'),
  });

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('Result not found');
  expect(response.body).toMatchSnapshot();
});

it('should return result by id', async () => {
  const result = await createResult({});
  const response = await createGetApiCall({
    url: getUrl(result._id),
  });

  expect(response.status).toBe(200);
  expect(response.body.result.repositoryName).toBe(result.repositoryName);
  expect(response.body.result.status).toBe(result.status);
  expect(sanitizeTestObject(response.body)).toMatchSnapshot();
});
