function prepare(){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log("Ingredients prepared")
      resolve()
  }, 10000)
  })
}

function dishpre(){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log("dish prepared")
      resolve()
  }, 10000)
  })
}

function serve(){
  return new Promise(function(resolve){
    setTimeout(
      function(){
      console.log("served")
      resolve()
  }, 10000)
  })
}

prepare()
.then(dishpre)
.then(serve)
