const { expect } = require('expect');
const string = require('./stringLength');

// declsring string
const str = 'apple';
test('check length of str', () => {
  expect(string(str)).toBe(str.length);
});

test('limitation on length of str', () => {
  expect(string(str)).not.toEqual(0);
  expect(string(str)).not.toBeGreaterThan(10);
});
