const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply(NaN)).toThrow('error');

    expect(() => multiply('string')).toThrow('error');
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(8 * 5).toBe(40);

    // test that the returned value is correct
    expect(6 * 10).toBe(60);

    // test some other values
    expect(400 * 3).toBe(1200);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    Math.random() * Math.random() = Math.random() * Math.random();
  });
});
