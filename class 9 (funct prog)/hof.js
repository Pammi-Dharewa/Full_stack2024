let myRadiusArray = [1,2,3,4,5]

function Calculate(radius, cb){
  let result = []
  for(var i=0;i<radius.length;i++){
    result.push(cb(radius[i]))
  }
  return result
}

function area(r){
  return 3.14 * r * r 
}
function diameter(r){
  return 2 * r 
}

console.log(Calculate(myRadiusArray, area))
console.log(Calculate(myRadiusArray,diameter))

