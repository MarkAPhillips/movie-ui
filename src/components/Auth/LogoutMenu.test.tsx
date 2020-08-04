import React from 'react';
import {
  render, screen, RenderResult, fireEvent,
} from '@testing-library/react';
import { LogoutMenu } from './LogoutMenu';
import { ProfileName } from './ProfileName';
import { logout } from '../../auth/authService';

// Mocked component
jest.mock('./ProfileName');
const mockedProfileName = ProfileName as jest.Mock;
mockedProfileName.mockImplementation(() => <span>Test User</span>);

jest.mock('../../auth/authService');
const mockLogout = logout as jest.Mock;
mockLogout.mockResolvedValue({});

describe('LogoutMenu Tests', () => {
  let view : RenderResult;
  beforeEach(() => {
    view = render(<LogoutMenu />);
  });

  it('should verify the LogoutMenu is created', () => {
    expect(view.container).not.toBeNull();
  });

  it('should display the users profile name', () => {
    const matcher = screen.getByText(/Test User/i);
    expect(matcher).not.toBeNull();
  });

  it('should display the correct user icon', () => {
    const matcher = screen.getByRole('img', { hidden: true });
    expect(matcher.getAttribute('class')).toContain('fa-user');
  });

  it('should verify when Logging out the correct actions occur', async () => {
    const spy = jest.spyOn(Storage.prototype, 'removeItem')
      .mockImplementation(() => {
        expect(spy).toHaveBeenCalledWith('auth');
      });
    fireEvent.click(screen.getByText(/Logout/i));
    expect(logout).toHaveBeenCalled();
  });
});
