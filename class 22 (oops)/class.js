
class Pizza{
  constructor(toppings, size, base){
    this.toppings = toppings
    this.size = size
    this.base = base
  }

  describe(){
    console.log('this is decribe func')
  }
}

class stuffedPizza extends Pizza{
  constructor(toppings, size, base, stuffing){
    super(toppings, size, base)
    this.stuffing = stuffing
  }
}

let pizza1 = new Pizza('cheese', 'large', 'wheat')
let pizza2 = new stuffedPizza('cheese', 'large', 'wheat', 'extraCheese');

console.log(pizza2)