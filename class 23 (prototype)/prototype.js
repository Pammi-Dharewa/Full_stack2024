
Car.prototype.display = function(){
  console.log(`This is a ${this.name} manufactured in ${this.year} in ${this.color}`)
}

// should not manipulate default prototype
Car.prototype.__proto__.displaycolor = function(){
  console.log(`this is ${this.color} car`)
}

function Car(Name, Year, Color){
  this.name = Name
  this.year = Year
  this.color = Color
}

let car1 = new Car("Mustang", 2021, 'black')
let car2 = new Car('Posrche', 2024, 'Red')

console.log(car1)
console.log(car2)

car1.display()
car2.display()
car1.displaycolor()
car2.displaycolor()

car1.showbyname()