const rlSync = require('readline-sync');
let age = rlSync.questionInt("What is your age?\n");

for(let future=10; future < 50; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}

// console.log("You are " + age + " years old.");
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);