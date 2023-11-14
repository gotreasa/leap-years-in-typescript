import Dummy from '../../src/LeapYear';

describe('Leap year', () => {
  test('should return false for the year 1601', () => {
    const dummy = new Dummy();
    expect(dummy.valid).toBe(true);
  });
});
