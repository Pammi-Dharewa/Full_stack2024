function printName(cb1, cb2){
  console.log('hey')
  cb1()
  cb2()
}

function printlastName(){
  console.log('pammi')
}

function age(){
  console.log(23)
}

printName(printlastName,age)
