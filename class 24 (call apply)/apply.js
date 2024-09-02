
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

//just passing the argument is diff in this apply
// we cant directly pass the argument it should be passed in array

person1.printNameAge.apply(person3, ['India'])

// person1.printNameAge()
// person1.printNameAge()


//call

