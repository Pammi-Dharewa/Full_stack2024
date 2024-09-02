
const person1 = {
  name: 'Pammi',
  age: 23,
  // location: 'Nepal',
  printNameAge: function(location){
    console.log(`My name is ${this.name} and I am ${this.age} years old and i live in ${location}`)
  }
}

const person2 = {
  name: 'Sweta',
  age: 25
}

const person3 = {
  name: 'john',
  age: 25
}

person1.printNameAge.call(person2, 'Nepal')

// person1.printNameAge()
// person1.printNameAge()


//call

