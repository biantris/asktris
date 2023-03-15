import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import DetailScanResult from '../DetailScanResult';

it('should render DetailScanResult page', async () => {
  // eslint-disable-next-line
  const { debug, getByText } = render(
    <Router>
      <DetailScanResult />
    </Router>,
  );

  // uncomment to check DOM
  // debug();

  expect(getByText('loading...')).toBeTruthy();
});
