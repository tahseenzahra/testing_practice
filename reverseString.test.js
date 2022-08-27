const reversestr = require('./reverseString');
const str = "sweet apple";

test('reverse the string', () => {
  expect(reversestr(str)).toBe('elppa teews');
});