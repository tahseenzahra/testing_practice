function reverseString(string) {
  return string.split('').reverse().join('');
}
reverseString('apple');

module.exports = reverseString;

// reverseString