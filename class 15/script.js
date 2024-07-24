

const searchField = document.querySelector('.searchField')
const form = document.querySelector('.form')

let target = 'Mumbai'
form.addEventListener('submit', search)
function search(e){
  e.preventDefault()
  target = searchField.value
}
async function fetchData(target){
  const endpoint = `http://api.weatherapi.com/v1/current.json?key=22b07f36bbb74102b7a162619242207&q=${target}&aqi=no`
  
  const response = await fetch(endpoint)
  const data = await response.json()
  console.log(data)
}

fetchData(target);