import isLeapYear from '../../src/LeapYear';

describe('Leap year', () => {
  test('should return false for the year 1601', () => {
    expect(isLeapYear(1601)).toBe(false);
  });

  test('should return an error message for -1', () => {
    expect(() => isLeapYear(-1)).toThrow(
      'The year needs to be from 1600 to 4000',
    );
  });

  test('should return an error message for 4001', () => {
    expect(() => isLeapYear(4001)).toThrow(
      'The year needs to be from 1600 to 4000',
    );
  });
});
