
let form = document.querySelector('form')
let searchfield = document.querySelector('.searchInp')
let temp = document.querySelector('.temp')

let target = 'Mumbai'


form.addEventListener('submit', search)
  function search(e){
    e.preventDefault()
    target = searchfield.value
    console.log(target)
    fetchData(target)
  }

async function fetchData(target){
  let endpoint = `http://api.weatherapi.com/v1/current.json?key=22b07f36bbb74102b7a162619242207&q=${target}&aqi=no`

  let res = await fetch(endpoint) //js inbuilt method fetch to get the data (json data) here from endpoint
  let data = await res.json()
  console.log(data)
  let curtemp = data.current.temp_c
  let cityname = date.location.cityname
  let 

  updateweather(curtemp)
}

function updateweather(curtemp){
  temp.innerText = curtemp
}

