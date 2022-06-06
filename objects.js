let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
console.log(myObj.foo);
myObj.qux = 3;
console.log(myObj);
for(let key in myObj) {
  console.log(key);
}

let objKeys = Object.keys(myObj);
console.log(objKeys);

for(let key in myObj) {
  if(myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}

function copyObj(obj,keys) {
  console.log(keys);
  console.log(keys);
  if (!keys) {
    const objCopy = {...obj};
    return objCopy;
  }
  const objCopy = {};
  keys.forEach(k => objCopy[k]=obj[k])
  return objCopy;
}

copyObj({'foo': "bar"});

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words,regex) {

  const matches = [];

  words.forEach(w => {
    if(regex.test(w)) {
      matches.push(w);
    };
  })

  return matches;
}

console.log(allMatches(words, /lab/));

function isNotANumber(input) {
  console.log(input);
  if(input !== NaN) return true;
  else return false;
}

console.log(isNotANumber(NaN));

function negativeZero(num) {
  return 1 / num === -Infinity;
}



