import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  // Example using a more specific query (by class name)
  const linkElement = screen.getByTestId('learn-react-element');
  expect(linkElement).toBeInTheDocument();
});
