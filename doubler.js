function doubler(num) {

  console.log(num);

  if(num <= 50) {
    doubler(num * 2);
  }
}

doubler(5);
