import { render, screen } from '@testing-library/jest-dom/react';//import falla, no deja toHaveTextContent sin jest-dom pero luego falla render
import Home from '../pages/Home';

test('renders the Home page', () => {
  render(<Home />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Botiga solidària/);
});