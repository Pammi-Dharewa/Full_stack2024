
const fileSystem = require('fs')


console.log('Before')

fileSystem.readFile('f1.txt', cb1)

function cb1(err, data1) {
  if (err) {
    console.log(err)
    return
  }

  console.log("this is data1 -> " + data1)
  fileSystem.readFile('f2.txt', cb2)

}


function cb2(err, data2) {
  if (err) {
    console.log(err)
    return
  }
  console.log("this is data2 -> " + data2)
  fileSystem.readFile('f3.txt', cb3)

}

function cb3(err, data3) {
  if (err) {
    console.log(err)
    return
  }

  console.log("this is data3 -> " + data3)
}


console.log('After')