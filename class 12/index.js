function prepareing(callback){
  setTimeout(function (){
    console.log("Ingredients prepared")
    callback()
  }, 20000)
}

function cookdish(callback){
  setTimeout(function (){
    console.log("dish cooked")
    callback()
  }, 20000)
}

function servedish(callback){
  setTimeout(function (){
    console.log("dish served")
    callback()
  }, 20000)
}

function cleanUp(callback){
  setTimeout(function(){
    console.log("cleanUp done")
    callback();
  }, 20000)
}

prepareing(function(){
  cookdish(function(){
    servedish(function(){
      cleanUp(function(){
      })
    })
  })
})

function prepareing(callback){
  setTimeout(
    function(){
    console.log("food is prepared")
    callback();
  }, 2000)
}

function prepareing(){
  return new Promise(function(resolve, reject){
    setTimeout (function(){

    })
  })
}