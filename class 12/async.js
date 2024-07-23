// const { resolve } = require("path");

let mypromise = new Promise(function(resolve){
  setTimeout(function() {
    resolve('resolved in 3 secs')
  }, 3000);
})


async function getData(){
  return await mypromise
}
const data =  getData();

console.log(data)