// let arr = [1,2,3,4,5]

// function square(ar){
//   let result = []
//   for(let i=0;i<ar.length;i++){
//     result.push(ar[i] * ar[i])
//   }
//   return result
// }

// console.log(square(arr))

// let sumReduce =  arr.reduce(function(acc, num){
//   acc = acc + num 
//   return acc
//  },0)

//  console.log(sumReduce)

let arr = [1,2,3,4,5]
let squarevalues = arr.map(function(num){
  return num * num
})


console.log(squarevalues)

let totalsum = arr.reduce(function(acc, num){
  acc += num
  return acc
},0)

console.log(totalsum)
