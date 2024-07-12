
const fileSystem = require('fs')


console.log('Before')

fileSystem.readFile('f1.txt', function(err, data1){
  if(err){
    console.log(err)
    return 
  }

  console.log("this is data1 -> " + data1)
})



fileSystem.readFile('f2.txt', function(err, data2){
    if(err){
      console.log(err)
      return
    }
    console.log( "this is data2 -> " + data2)
})

fileSystem.readFile('f3.txt', function(err, data3){
  if(err){
    console.log(err)
    return 
  }

  console.log("this is data1 -> " + data3)
})
// console.log("data from the file1 -> " + data1)

console.log('After')