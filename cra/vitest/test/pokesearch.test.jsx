import React from 'react';
import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PokeSearch from '../../host/component/pokesearch'

test('renders PokeSearch without crashing', async () => {
  render(<PokeSearch />)
  const linkElement = screen.getByText(/Pokemon Search/i)
  expect(linkElement).not.toBeNull()
})

test('renders search input', async () => {
  render(<PokeSearch />)
  const inputElement = screen.getByRole('textbox')
  expect(inputElement).not.toBeNull()
})