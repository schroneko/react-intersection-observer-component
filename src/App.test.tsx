import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from './App';

test('updates the heading when the section enters the viewport', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Header inside viewport false.');
  mockAllIsIntersecting(true);
  expect(screen.getByRole('heading')).toHaveTextContent('Header inside viewport true.');
});
