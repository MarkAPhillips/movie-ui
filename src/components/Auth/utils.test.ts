import { getName } from './utils';

describe('Auth utils tests', () => {
  describe('getName tests', () => {
    it('should return the users name when local storage set', () => {
      const mockAuth = '{"user":{"id":2,"email":"work-mpconsultants@outlook.com","firstName":"Test","lastName":"User"}}';
      Storage.prototype.getItem = jest.fn(() => mockAuth);
      const name = getName();
      expect(name).toEqual('Test User');
    });

    it('should return a empty string when local storage not set', () => {
      Storage.prototype.getItem = jest.fn(() => null);
      const name = getName();
      expect(name).toEqual('');
    });
  });
});
