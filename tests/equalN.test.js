const equalN = require('../src/index');

describe('equalN function', () => {
  
  // Test for strict equality
  test('returns true when both numbers are equal', () => {
    expect(equalN(5, 5)).toBe(true);
  });

  // Test for strict inequality
  test('returns false when numbers are not equal', () => {
    expect(equalN(5, 6)).toBe(false);
  });

  // Test when x is not an integer
  test('returns false when x is not an integer', () => {
    expect(equalN(5.5, 5)).toBe(false);
    expect(equalN('5', 5)).toBe(false); // Even a string should return false
  });

  // Test when n is not an integer
  test('throws an error when n is not an integer', () => {
    expect(() => equalN(5, 5.5)).toThrowError('Input n must strictly be an integer, got 5.5 type number instead.');
    expect(() => equalN(5, '5')).toThrowError('Input n must strictly be an integer, got 5 type string instead.');
  });

  // Test when both x and n are not integers
  test('returns false when both x and n are not integers', () => {
    expect(equalN(5.5, 5.5)).toBe(false);
  });
});
