console.log(Math.PI)
Math.PI=4// its a hardcoded calue hence it cant be changed
console.log(Math.PI)

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter)// writable, enumerable, configurable all three of them are false hence the result of it we cant change the value of false

const chai = {
    name: 'chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai was't made")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"price"))

Object.defineProperty(chai, 'name',{
    wrtable: false,
    enumerable: false,
    
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai)){// in this the name wont be iterated over because it is non enumerable
    console.log(`${key}:${value}`)
}

//object shorthand notation
const name = "Bob";
const age = 28;
const color = "red";

const thatObject = { name: name, age: age, color: color };
const nowFancyObject = { name, age, color };//when we want the same name as in the property then we can use shorthand notation
console.log(thatObject,nowFancyObject)