import { render, screen } from '@testing-library/react'
import App from '../components/App'

// Basic check for App init
test('renders header', () => {
  render(<App />)
  const headerElement = screen.getByText(/BELONG TECHNICAL TASK/i)
  expect(headerElement).toBeInTheDocument()
})
