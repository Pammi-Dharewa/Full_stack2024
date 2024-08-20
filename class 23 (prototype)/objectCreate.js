
let carPrototype = {
  display: function(){
    console.log(`This is a ${this.name}`)
  }
}


let obj1 = Object.create(carPrototype)
obj1.name = "pammi"
obj1.age = 23
console.log(obj1)