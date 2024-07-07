// var c = 0
// function sum(a,b){
//   console.log('I am c = ' + c)
//   return a + b + c++
// }

// console.log(sum(2,3))
// console.log(sum(3,2))


// que : make a funct that doesnot changes original array
// function addToArr(arr,value){
//   let ar = [...arr]
//   ar.push(value)
//   return ar;
// }

// const original = [1,2,3,4]
// const newarr = addToArr(original,7)

// console.log(original)
// console.log(newarr)

rad = [1,2,3,4,5]
function Calculate(r, cb){
  let ans = []
  for(let i=0;i<r.length;i++){
    ans[i] = cb(r[i])
  }
  return ans
}

function area(r){
  return r * r * 3.14
}
function diameter(r){
  return 2 * r
}

console.log(Calculate(rad, area))
console.log(Calculate(rad, diameter))

// function diameter(r){
//   let ans = []
//   for(let i=0;i<r.length;i++){
//     ans[i] = r[i] * 2
//   }
//   return ans
// }

// let arr1 = area(rad)
// console.log(arr1)

// let arr2 = diameter(rad)
// console.log(arr2)


