let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(n => {
  if(n % 2 === 0) {
    console.log(n);
  }
});

myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for(let i=0; i<myArray.length; i++) {
  for(let j=0; j<myArray[i].length; j++) {
    if(myArray[i][j] % 2 === 0) {
      console.log(myArray[i][j]);
    }
  }
}

myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

evenOddLabels = myArray.map(x => x % 2 === 0 ? 'even' : 'odd');
console.log(evenOddLabels);





