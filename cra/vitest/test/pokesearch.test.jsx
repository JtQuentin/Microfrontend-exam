import React from 'react';
import { render, screen, act } from '@testing-library/react';

import PokeSearch from '../../host/component/pokesearch';

test('renders PokeSearch without crashing', () => {
  act(() => {
    render(<PokeSearch />);
  });
  const linkElement = screen.getByText(/Pokemon Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search button', () => {
  act(() => {
    render(<PokeSearch />);
  });
  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});