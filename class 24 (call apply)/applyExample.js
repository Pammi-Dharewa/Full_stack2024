
let arr = [10,20,30,40,4]

// first argu should always be obj in apply func so
// if we dont have obj we pass null value
let max = Math.max.apply(null, arr)

console.log(max)
