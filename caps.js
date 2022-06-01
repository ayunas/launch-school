
function caps10(msg) {

  if(msg.length > 10) {
    return msg.toUpperCase();
  } else return msg;
}

console.log(caps10("hello world"));
