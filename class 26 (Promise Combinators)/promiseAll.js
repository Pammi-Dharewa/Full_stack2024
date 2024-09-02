


const original = {
  name: 'pammi',
  age: 12, 
  details: {
    age: 30,
    name: 'jain'
  }
}

function deepCopy(obj){
  let obj1 = {}
  for(let key in obj){
    obj1[key] = obj[key];
  }
    return obj1;
}

let deepCopied = deepCopy(original)
deepCopied.details.age = 789;

console.log(original);
console.log(deepCopied)