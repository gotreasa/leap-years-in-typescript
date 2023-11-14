import isLeapYear from '../../src/LeapYear';

describe('Leap year', () => {
  test('should return false for the year 1601', () => {
    expect(isLeapYear(1601)).toBe(false);
  });
});
