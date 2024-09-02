
// let arrNum = [1,2,4,5,6,7,9]

// let resultuarr = arrNum.filter(function(num){
//   return num % 2 == 0 //this return boolean 
// })

// console.log(resultuarr)

Array.prototype.myFilter = function(cb){
  let resultarr = []

  for(let i=0;i<this.length;i++){
    if(cb(this[i])){
      resultarr.push(this[i]);
    }
  }
  return resultarr;
}

let ele = [1,2,5,48,7,9,3,0];

let result = ele.myFilter(function(num){
  return num % 2 == 0;
})

console.log(result)