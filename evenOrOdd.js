
function evenOrOdd(num) {
  if(typeof num !== 'number') console.error("number required");
  return num % 2 === 0 ? console.log('even') : console.log('odd');
}


evenOrOdd('hello');

