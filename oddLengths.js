let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
 return arr.map(l => l.length).filter(n => n % 2 === 1);
}


console.log(oddLengths(arr)); // => [1, 5, 3]

function odderLengths(strArr) {

  strArr.reduce((lengths,letters) => {
    const length = letters.length;
    if(length % 2 === 1) {
      lengths.push(length);
    }
    return lengths;
  },[])
}

console.log(odderLengths(arr));





function sumOfSquares(arr) {
  return arr.reduce((sum,num) => sum + Math.pow(num,2),0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83