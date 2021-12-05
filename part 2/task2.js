function getArr(){
  let arr=[];
  return function(x){
    if(x !== undefined){
      arr.push(x);
    }
    else{
      arr=[];
    }
    return arr;
  }
}

let getUpdatedArray = getArr();
console.log(getUpdatedArray(3));
console.log(getUpdatedArray(5));
console.log(getUpdatedArray({ name: 'Vasya' }));
console.log(getUpdatedArray());
console.log(getUpdatedArray(4));
