/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { clearDbAndRestartCounters, connectMongoose, disconnectMongoose } from '@asktris/test';

import { createGetApiCall } from '../../test';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

const url = '/api/version';

it('should get api version correctly', async () => {
  //@ts-ignore
  const response = await createGetApiCall({ url });

  expect(response.body).toMatchSnapshot();
  expect(response.status).toBe(200);
});
