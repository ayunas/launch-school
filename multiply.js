
function multiply() {
  const readlineSync = require("readline-sync");
  let x = readlineSync.questionInt("first number : ");
  let y = readlineSync.questionInt("second number : ");
  return x * y;
}


const result = multiply();
console.log(result);