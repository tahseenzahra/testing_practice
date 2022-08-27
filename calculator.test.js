const Calculator = require('./calculator');

const calc = new Calculator();

describe('addition', () => {
  test('Add numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(10, 20)).toBe(30);
    expect(calc.add(-10, 5)).toBe(-5);
  });
});

describe('substraction', () => {
  test('subtract numbers', () => {
    expect(calc.subtract(2, 3)).toBe(-1);
    expect(calc.subtract(20, 10)).toBe(10);
    expect(calc.subtract(-10, 5)).toBe(-15);
  });
});

describe('division', () => {
  test('division of numbers', () => {
    expect(calc.divide(2, 0)).toBeUndefined();
    expect(calc.divide(10, 20)).toBe(0.5);
    expect(calc.divide(-10, 5)).toBe(-2);
  });
});

describe('multiolication', () => {
  test('Multiply numbers', () => {
    expect(calc.multiply(2, 3)).toBe(6);
    expect(calc.multiply(10, 20)).toBe(200);
    expect(calc.multiply(0, 5)).toBe(0);
  });
});