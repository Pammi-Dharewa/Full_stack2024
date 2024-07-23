

async function fetchData(){
  const endpoint = 'http://api.weatherapi.com/v1/current.json?key=22b07f36bbb74102b7a162619242207&q=Biratnagar&aqi=no'
  
  const data = await fetch(endpoint)
  console.log(data)
}

fetchData();