const readlineSync = require('readline-sync');

function numberRange(num) {

  switch(true) {
    case num > 0 && num <= 50:
      console.log(num + " is between 0 and 50");
      break;
    case num > 50 && num <= 100:
      console.log(num + " is between 50 and 100");
      break;
    case num > 100:
      console.log(num + " is greater than 100");
      break;
    default:
      console.log(num + " is less than zero");
  }
}

const num = readlineSync.questionInt("Enter an integer : ");
console.log(numberRange(num));

module.exports = numberRange;