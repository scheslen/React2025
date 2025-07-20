
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loader } from './Loader';

describe('Loader Component', () => {
  it('renders class "loader"', () => {
    const { container } = render(<Loader />);
    const loaderDiv = container.querySelector('.loader');
    expect(loaderDiv).toBeInTheDocument();
  });
});

