function getSum(){
  let n = 0;
  return function(k){
    return n+=k;
  }
}
let counter = getSum();
console.log(counter(3));
console.log(counter(5));
console.log(counter(228));
