
const fileSystem = require('fs')


console.log('Before')

const data1 = fileSystem.readFileSync('f1.txt')
console.log("data from the file1 -> " + data1)

console.log('After')

