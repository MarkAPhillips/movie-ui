import { formatMins } from './dateTimeFormatter';

describe('formatMins tests', () => {
  it.each`
    value | result
    ${60}        ${'1h'}
    ${45}        ${'45 mins'}
    ${310}        ${'5h 10 mins'}
    ${undefined}        ${''}
    `('should return a valid formatted time for $value mins',
  ({
    value, result,
  }) => {
    expect(formatMins(value)).toEqual(result);
  });
});
