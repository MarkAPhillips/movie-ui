import { snakeCase } from 'lodash';
import { transformObjectKeys } from './objectFormatter';

describe('objectFormatter tests', () => {
  it('should convert an object keys to camel case', () => {
    const input = {
      access_token: 'ABC',
      user: {
        id: 1,
        first_name: 'Test',
        last_name: 'User',
      },
    };

    const expected = {
      accessToken: 'ABC',
      user: {
        id: 1,
        firstName: 'Test',
        lastName: 'User',
      },
    };

    expect(transformObjectKeys(input)).toEqual(expected);
  });

  it('should convert an object keys to snake case', () => {
    const input = {
      accessToken: 'ABC',
      user: {
        id: 1,
        firstName: 'Test',
        lastName: 'User',
        password1: 'abc',
      },
    };

    const expected = {
      access_token: 'ABC',
      user: {
        id: 1,
        first_name: 'Test',
        last_name: 'User',
        password1: 'abc',
      },
    };

    expect(transformObjectKeys(input, snakeCase, ['password1'])).toEqual(expected);
  });
});
