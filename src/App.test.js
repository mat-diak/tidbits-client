import {render, screen} from '@testing-library/react';
import App from './App';
 
 it('renders h1 element', () => {
    render(<App />);
    
    expect(screen.getByText('Snacks')).toBeInTheDocument();
  });