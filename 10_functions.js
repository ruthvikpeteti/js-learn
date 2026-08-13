function addOne(num){//it is the way to define a function.
    return num+1
}
const addTwo = function(num){// another way to define a function, here addTwo expression is the name of the function, which holds the functionj.
    return num+2
}
// both function declaration are not the same and have different scope.
function sayMyName(){
    console.log("R")
    console.log("u")
    console.log("t")
    console.log("h")
    console.log("v")
    console.log("i")
    console.log("k")
}
sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    return num1+num2
}
const x = addTwoNumbers(5,6)
console.log("Result: ",x)

function loginUserMessage(username = "none"){
    return `${username} logged in`
}

console.log(loginUserMessage("Ruthvik"))
console.log(loginUserMessage())

function cart(item1,item2, ...remaining){}//it this when we pass the values the first 2 will go in item 1 and item 2 and the remaining will go in the array, ...reamaining is called the rest parameter.
 