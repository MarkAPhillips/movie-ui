import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, RenderResult } from '@testing-library/react';
import { LoginMenu } from './LoginMenu';

describe('LoginMenu Tests', () => {
  let view: RenderResult;
  beforeEach(() => {
    view = render(<MemoryRouter><LoginMenu /></MemoryRouter>);
  });

  it('should verify the LoginMenu is created', () => {
    expect(view.container).not.toBeNull();
  });

  it('should contain two links', () => {
    expect(view.container.querySelectorAll('a').length).toBe(2);
  });

  it('should contain a Sign In link with the correct url', () => {
    const matcher = screen.getByText(/Sign in/i) as HTMLAnchorElement;
    expect(matcher.href).toBe('http://localhost/auth/login');
  });

  it('should contain a Register link with the correct url', () => {
    const matcher = screen.getByText(/Register/i) as HTMLAnchorElement;
    expect(matcher.href).toBe('http://localhost/auth/register');
  });
});
