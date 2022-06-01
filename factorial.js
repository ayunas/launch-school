function factorial(n) {
  let product = 1;

  for(let i=n; i>0; i--) {
    product *= i;
  }

  return product;
}



function factorialRecursive(n) {

  if(n <= 1) return 1;

  return n * factorialRecursive(n-1);

}


module.exports = {
  factorial,
  factorialRecursive
}
