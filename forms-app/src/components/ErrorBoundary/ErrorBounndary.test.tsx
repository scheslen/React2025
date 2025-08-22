import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';
import '@testing-library/jest-dom';

const ErrorComponent = () => {
  throw new Error('error');
};

describe('ErrorBoundary Component', () => {
  it('renders content without error', () => {
    render(
      <ErrorBoundary>
        <div>Normal component</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal component')).toBeInTheDocument();
  });

  it('enders content with error', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();

    errorSpy.mockRestore();
  });
});
