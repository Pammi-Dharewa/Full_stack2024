

let nums = [1,2,3,4,5,6]

// let res = nums.reduce(function(acc, num){
//   acc = acc + num
//   return acc
// }, 0)

// console.log(res)


Array.prototype.myReduce = function(cb, initialValue){
  let accumulator = initialValue;
  // let firstIndex = 0;

  for(let i= 0; i<this.length;i++){
    accumulator = cb(accumulator, this[i]); 
  }
  return accumulator;
}

let res = nums.myReduce(function(acc, num){
  return acc += num
}, 0)

console.log(res)