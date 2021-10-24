import React from 'react';
import { render } from 'test-utils';
import App from './index';

describe('App component', () => {

  it('should render component', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('app');
  });
  
});
