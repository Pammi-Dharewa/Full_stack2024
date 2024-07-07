// function print(){
//   console.log('pammi')
// }
// print();

// var sayhi = function(){
//   console.log('hi')
// }

// sayhi()


// var serveBevrage = function(quantity,drink){
//   console.log('i want ' + quantity + ' ' + drink)
// }

// serveBevrage(3,'tea')

// var a = 2
// var b = 3

// function add(a,b){
//   return a + b
// }

// var res = add(a,b)
// console.log(res)
// var res2 = add(6,8)
// console.log(res2)


var x = 1
var y = 6
function parent(x,y){
  var a = 10
  function child1(){
    console.log('this is ' + a)
  }
  console.log(x+y)
  child1()
}
parent(x,y)