import { test } from 'vitest'
import { render } from '@testing-library/react'
import Card from '../../remote/component/card'


test('renders Card component correctly', () => {
  const { getByText } = render(<Card title="Unique component" />)
  const titleElement = getByText(/Unique component/i)
  assert.ok(titleElement)
})