import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import Home from '../home';

it('should render home page', async () => {
  // eslint-disable-next-line
  const { debug, getByText } = render(
    <Router>
      <Home />
    </Router>,
  );

  // uncomment to check DOM
  // debug();

  expect(getByText('asktris crud')).toBeTruthy();
  expect(getByText(/Fullstack Playground and/i)).toBeTruthy();
  expect(getByText('asklisa')).toBeTruthy();
  expect(getByText(/challenge/i)).toBeTruthy();
  expect(getByText('Get Started')).toBeTruthy();
});
