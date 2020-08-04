import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { LogoutMenu } from './LogoutMenu';

describe('LogoutMenu Tests', () => {
  let view : RenderResult;
  beforeEach(() => {
    view = render(<LogoutMenu />);
  });

  test('Logout menu view is created', () => {
    screen.debug();
    expect(view.container).not.toBeNull();
  });
});
