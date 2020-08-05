import React from 'react';
import {
  render, screen, RenderResult, fireEvent,
} from '@testing-library/react';
import { LogoutMenu } from './LogoutMenu';
import { logout } from '../../auth/authService';
import * as appState from '../../apollo/appState';

// Mocks
jest.mock('../../auth/authService');
const mockLogout = logout as jest.Mock;

describe('LogoutMenu Tests', () => {
  let view: RenderResult;
  beforeEach(() => {
    view = render(<LogoutMenu name="Test User" />);
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
    // Set up mocks
    // TODO: Review this pattern to see if can be simplified as seems a bit of a hack
    mockLogout.mockResolvedValueOnce({});
    const storageSpy = jest.spyOn(Storage.prototype, 'removeItem')
      .mockImplementationOnce(() => {
        expect(storageSpy).toHaveBeenCalledWith('auth');
      });
    const appStateSpy = jest.spyOn(appState, 'isAuthorisedVar')
      .mockImplementationOnce(() => {
        expect(appStateSpy).toHaveBeenCalledWith(false);
        return false;
      });
    // Trigger event
    fireEvent.click(screen.getByText(/Logout/i));
    expect(logout).toHaveBeenCalled();
  });
});
