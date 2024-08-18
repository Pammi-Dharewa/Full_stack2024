

// function add(a,b){
//   return a+b
// }

// console.log(add(2,3))

// const add = (a,b)=>{
//   return a+b
// }
// console.log(add(2,3))

const obj = {
  name : 'pammi',
  age : 23,
  fn1 : ()=> {
    console.log(this)
  }
}
obj.fn1()