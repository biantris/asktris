/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  clearDbAndRestartCounters,
  connectMongoose,
  createGetApiCall,
  disconnectMongoose,
  sanitizeTestObject,
} from '../../../../test';

import { createResult } from '../../../modules/result/fixtures/createResult';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

const url = '/api/result';

it('should return a list of results', async () => {
  const result = await createResult({});
  const resulB = await createResult({});

  const response = await createGetApiCall({
    url,
  });

  expect(response.status).toBe(200);
  expect(sanitizeTestObject(response.body)).toMatchSnapshot();
});

it('should return 100 results if no skip limit is not specific', async () => {
  for (const i of Array.from(Array(110).keys())) {
    await createResult({ name: `results#${i + 2}` });
  }

  const response = await createGetApiCall({
    url,
  });

  expect(response.status).toBe(200);
  expect(response.body.results.length).toBe(100);
  expect(sanitizeTestObject(response.body)).toMatchSnapshot();
});

it('should paginate skipping 90 results and limit 10', async () => {
  for (const i of Array.from(Array(110).keys())) {
    await createResult({ name: `result#${i + 2}` });
  }

  const response = await createGetApiCall({
    url: `${url}?skip=90&limit=10`,
  });

  expect(response.status).toBe(200);
  expect(response.body.results.length).toBe(10);
  expect(sanitizeTestObject(response.body)).toMatchSnapshot();
});
