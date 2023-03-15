import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import ScanResults from '../ScanResults';

it('should render ScanResults page', async () => {
  // eslint-disable-next-line
  const { debug, getByText } = render(
    <Router>
      <ScanResults />
    </Router>,
  );

  // uncomment to check DOM
  // debug();

  expect(getByText('No Scanning Results')).toBeTruthy();
});
