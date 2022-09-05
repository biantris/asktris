import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import NewScanResult from '../NewScanResult';

it('should render NewScanResult page', async () => {
  // eslint-disable-next-line
  const { debug, getByText } = render(
    <Router>
      <NewScanResult />
    </Router>,
  );

  // uncomment to check DOM
  // debug();

  expect(getByText('Create New Scan Result')).toBeTruthy();
});
