
const fs = require('fs')
let promiseReadfile = fs.promises.readFile('f2.txt')

promiseReadfile.then(function(data){
  console.log("this is my file data" + data)
})

promiseReadfile.catch(function(err){
  console.log("this is the error" + err)
})