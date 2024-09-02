

const car = {
  name: 'BMW',
  YOM: 2023, 
  color: 'Blue',

  drive: function(){
    console.log(`Driving a ${this.color} ${this.name}`)

  }
}

const car2 = {
  name: 'Ferrari',
  YOM: 2023,
  color: 'Red'
}

car1.drive.bind(car2)