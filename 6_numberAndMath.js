const score =100//Auto defined that its a number
console.log(score)

const balance = new Number(100)//defining that the given value is a number
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))//Gives n number of decimal points after a number

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))// it given n significant digits of the number given and rounds off the last numbers
console.log(otherNumber.toPrecision(4))

//Math
console.log(Math.random())// gives values between 0 and 1 whule including 0 and not including 1
console.log(Math.random()*10)

console.log(Math.floor(Math.random()*10))//it gives a value between 0 and 9, it cant give 10 becz 9.9 floor is 9 and random function does not give 1
const min = 10, max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)