const capitalize = require('./capital');

test('Capitalize First Letter', () => {
  expect(capitalize('pakistan')).toBe('Pakistan');
  expect(capitalize('multan')).toBe('Multan');
  expect(capitalize('tahseen')).toBe('Tahseen');
});