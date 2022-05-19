const num = 4936;

const ones = 4936 % 10;

let updatedNum = (num - ones) / 10;

const tens = updatedNum % 10;
console.log(tens);

updatedNum = (updatedNum - tens) / 10;

console.log(updatedNum);

const hundreds = updatedNum % 10;
updatedNum = (updatedNum - hundreds) / 10;

console.log(updatedNum);
const thousands = updatedNum;

//6.
`The value of 5 + 10 is ${Number('5') + 10}.`;

