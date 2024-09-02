 let arr = [1,2,3,4,5];


 Array.prototype.myMap = function(cb){
  let resultarr = []

  for(let i=0;i<this.length;i++){
    resultarr.push(cb(this[i]));
  }
  return resultarr;
 }

 let finalarr = arr.myMap(function(num){
  return num * num;
 })

 console.log(finalarr);