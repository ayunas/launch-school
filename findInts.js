let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  const ints = arr.filter(el => Number.isInteger(el));
  return ints;
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
