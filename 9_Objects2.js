console.log(Math.PI)
Math.PI=4// its a hardcoded calue hence it cant be changed
console.log(Math.PI)

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter)// writable, enumerable, configurable all three of them are false hence the result of it we cant change the value of false

const chai = {
    name: 'chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"price"))
