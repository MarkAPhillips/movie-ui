import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, RenderResult } from '@testing-library/react';
import { LoginMenu } from './LoginMenu';

describe('LoginMenu Tests', () => {
  let view : RenderResult;
  beforeEach(() => {
    view = render(<MemoryRouter><LoginMenu /></MemoryRouter>);
  });

  test('Login menu view is created', () => {
    expect(view.container).not.toBeNull();
  });

  test('Login Menu contains two links', () => {
    expect(view.container.querySelectorAll('a').length).toBe(2);
  });

  test('contains a Sign in Link', () => {
    const matcher = screen.getByText('Sign in') as HTMLAnchorElement;
    expect(matcher.href).toBe('http://localhost/auth/login');
  });

  test('contains a Register Link', () => {
    const matcher = screen.getByText('Register') as HTMLAnchorElement;
    expect(matcher.href).toBe('http://localhost/auth/register');
  });
});
