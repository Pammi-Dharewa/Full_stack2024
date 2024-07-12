



const myPromise = new Promise(function(resolve , reject){
  setTimeout(function() {
    const isHeads = Math.random() > 0.5
    if(isHeads){
      resolve("Heads")
    }else{
      reject("tails - Coin toss resulted in tails, considered as a fail for this example.")
    }
  }, 1000)
})

myPromise.then(function(result){
  console.log(result)
})

myPromise.catch(function(error){
  console.log(error)
})
