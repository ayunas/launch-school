const factorial = require('../factorial');


describe("factorial",() => {

  test("factorial of 3 is 6", () => {
    const actual = factorial.factorial(3);
    const expected = 6;

    expect(actual).toBe(expected);
  });

  test("factorial of 5 is 120",()=>{
    const actual = factorial.factorial(5);
    const expected = 120;
    expect(actual).toBe(expected);
  })


});

describe("factorialRecursive",() => {

  test("3 factorial is 6",() => {
    const actual = factorial.factorialRecursive(3);
    const expected = 6;
    expect(actual).toBe(expected);
  });

  test("8 factorial is 40320",() => {
    const actual = factorial.factorialRecursive(8);
    const expected = 40320;
    expect(actual).toBe(expected);
  })


})