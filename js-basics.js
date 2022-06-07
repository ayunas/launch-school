for( let i = 1; i <= 100; i++) {

  console.log(i*2);

}


let array = [1,2,3,4]
let i = 0;

while(i < array.length) {
  console.log(array[i]);
  i++;
}

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for( let i = 0; i < cities.length; i++) {
  if(cities[i] === null) continue;

  console.log(cities[i].length);

}

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for(let i=0; i<fish.length; i++) {
  if(i === 4) break;
  console.log(fish[i]);
}

let rand = Math.round(Math.random());
rand ? 'yes' : 'no';

function compareByLength(word1,word2) {
  if(word1.length === word2.length) return 0;
  return word1.length < word2.length ? -1 : 1;
}

console.log(compareByLength('jazzy','jazz'));

console.log('Captain Ruby'.replace(/Ruby/i,'JavaScript'));

function greet(lang) {
  switch(lang) {
    
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    default:
      console.log("Hello!");
  }
}

// greet('en');

function extractLang(locale) {
  const lang = locale.substring(0,2)
  return lang;
}

function extractLocale(locale) {
  return locale.split('.')[0].split('_')[1];
}

console.log(extractLang('en_US.UTF-8'));

function localGreet(locale) {
  const lang = extractLang(locale);
  const loc = extractLocale(locale);
  greet(lang);
}

localGreet('fr_CA.UTF-8');

console.log(greeting)
var greeting = "hello";

let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

console.log(rhyme);
// A pirate I was meant to be!
// Trim the sails and roam the sea!

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(byteSequence.includes('x'));

let launch = "launch school tech & talk";
let launchArr = launch.split(' ');
const caps = launchArr.map(l => {
  return l[0].toUpperCase() + l.substring(1);
})

console.log(caps.join(" "));

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift();
energy.push('geothermal');

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for(let i=0; i < vocabulary.length; i++) {
  for(let j=0; j < vocabulary[i].length; j++) {
    console.log(vocabulary[i][j])
  }
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


function destinationSearch(dest) {
  for(let d=0; d<destinations.length; d++) {
    if(destinations[d] === dest) return true;
  }

  return false;
}

console.log(destinationSearch('London'));

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(groceryList,checkedItem);
}

function bmiCalc(weight,height) {
  const meters = height / 100;
  const bmi = weight / (meters**2);
  return bmi.toFixed(2);
}

bmiCalc(80,180)

function catAge(yrs) {
  let catYears;
  if(yrs===0) return 0;
  if(yrs===1) return 15;
  if(yrs===2) return 24;
  if(yrs >= 3) {
    catYears = 15 + 9 + 4*(yrs-2);
    return catYears;
  }
}

module.exports = {catAge}