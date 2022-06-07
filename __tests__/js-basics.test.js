const {catAge} = require('../js-basics');

describe('cat years',() => {
  
  test('4 years === 32 cat years', () => {
    const expected = 32;
    const actual = catAge(4);

    console.log(catAge);
    expect(actual).toBe(expected);
  
  });

  test('5 years === 36', () => {
    const expected = 36;
    const actual = catAge(5);
    expect(actual).toBe(expected);
  });

  test('0 years === 0',() => {
    const expected = 0;
    const actual = catAge(0);
    expect(actual).toBe(expected);


  })


})