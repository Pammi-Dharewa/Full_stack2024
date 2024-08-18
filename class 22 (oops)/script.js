

// let pizza = {
//   toppings : ['cheese', 'capsicum' , 'corn'],
//   size: 'small',
//   base: 'wheat'
// }

//Constructor Function

function Pizza(toppings, size, base){
  this.toppings = toppings
  this.size = size
  this.base = base

  this.des = function(){
    console.log(`This Piizza has ${this.toppings} ${this.base}`)
  }
}

let Pizza1 = new Pizza(['cheese','corn'], 'large', 'wheat')

let Pizza2 = new Pizza(['cheese', 'capsicum'], 'small', 'maida')
console.log(Pizza1)
Pizza1.des()

console.log(Pizza2)

// Pizza('cheese', 'large', 'wheat')