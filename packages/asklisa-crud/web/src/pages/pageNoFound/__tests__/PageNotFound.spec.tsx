import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import PageNotFound from '../PageNotFound';

it('should render PageNotFound page', async () => {
  // eslint-disable-next-line
  const { debug, getByText } = render(
    <Router>
      <PageNotFound />
    </Router>,
  );

  // uncomment to check DOM
  // debug();

  expect(getByText('Page Not Found')).toBeTruthy();
  expect(getByText(/Go to Home/i)).toBeTruthy();
});
