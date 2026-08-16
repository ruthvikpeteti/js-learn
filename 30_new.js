const newHero = ['hulk','spiderMan']
//in inspect if we run the above line then we will get prototype list
//in prototype inheritence everything an array string etc are object and all object inhert properties from the top/tree like
//Array-- object-->null
//          |
//       string
// both array and string have thee properties but both have inherit some properties from the object

function powerby5(num){
    return num**5
}

powerby5.power = 2// this could only be done if function behaves like an object

console.log(powerby5(10))
console.log(powerby5.power);// the o/p is 2 so t does behave like a object
console.log(powerby5.prototype);// it has a prototype but returns a {} as there is nothing in it

function createUser(username,score){
    this.username = username 
    this.score = score;
}
//by itself there is no prototype for function but we could still add methods to it because its a object and object ha a protoype and it inherits it from the object.
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
//if we dont use the new keyword here it would,nt make the object for each varaaible and it would be we wont be able to the methoads we created via prototype
const chai = new createUser("Chai",25)
const tea = new createUser("Tea",250)

chai.printMe()