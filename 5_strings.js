const name="Ruthvik"
const repocount= 50

console.log(name + repocount + " Value")// name is a global variable so when we give global variable another value then it gets a line on it.
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName= new String('hello')// This is string object and is different from normal/primitive string.

console.log(gameName.length)
console.log(gameName.indexOf('l'))
console.log(gameName.slice(0,4))