// let person = {
//   name:pammi
//   age:23
//   color:red
// }



const CaptainAmerica = {
  name: 'steve rogers',
  age: 104,
  friends: ['tony','nucy'],
  address: {
    country: 'USA',
    city: {
      name: 'brooklyn',
      pincode: 12345
    },
  },
  isavenger: true
}

console.log(CaptainAmerica.address.city.name)
console.log(CaptainAmerica.friends[0])
CaptainAmerica.isavenger = false
CaptainAmerica.movies = ['endgame','civil war']
console.log(CaptainAmerica.movies)
delete CaptainAmerica.age
console.log(CaptainAmerica.age)