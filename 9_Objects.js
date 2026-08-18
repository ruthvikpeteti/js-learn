//Object literals
const mySym = Symbol("key1")
const jsUser = {
    name:"ruthvik",
    age: 18,
    location : "Gurgaon",
    email : "peteti.ruthvik@gmail.com",
    [mySym] : "key1"//Using Symbol in a dictionary
}

// Accessing object properties
console.log(jsUser.email)
console.log(jsUser["email"])
jsUser.name="Ruthvik"
console.log(jsUser.name)
// Object.freeze(jsUser)
// jsUser.name="ruthvik"//Does not work as object has been freezed that is it cannot be changed
// console.log(jsUser.name)
jsUser.country="India"
console.log(jsUser.hello)// prints undefined if the key dosent exist.
jsUser.hello="Hello Everyone"
console.log(jsUser.hello)// can add a new member like this.
jsUser.greeting = function(){
    console.log("Hello JS User.")// Logs a greeting message to the console when called
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User.${this.name}`)// Template literals (` `) allow variable interpolation using ${}
   // `this` refers to the current object (jsUser in this case).
}

console.log(jsUser.greeting())//prints undefined because there is nothing greeting() returns to the calling function
console.log(jsUser.greetingTwo())

const tinder = new Object()//Another older and less preffered way of creating a new object.

const regularUser= {
    email: "some@gmail.com",
    userfullname:{//having a object inside another object.
        name:"Ruthvik",
        surname:"Peteti",
    },
    isLoggedIn : false
}
console.log(regularUser.userfullname.surname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = { obj1, obj2}// it creates a new obj with 1 and 2 obj inside it.
const obj3 = Object.assign({}, obj1, obj2)// {} here is the traget where you want the elements of the objects to be
// if the it is written like Object.assign(obj1,obj2) the elements of obj2 are sent into the target that is obj1 and onj 1 is modified.
// Object.assign always returns the target object
console.log(obj3)

const obj4 = {...obj1, ...obj2}//another way of making a new object with the elements of the other objects that is the elements of obj1 and onj2.
console.log(obj4)

//some object operations/functions
console.log(regularUser)
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))//makes an array of elements, with each element being an array having the key value pair

console.log(regularUser.hasOwnProperty("isLoggedIn"))// checks if the element with that key is present.

const course = {
    coursename: "Js full course",
    price: "999",
    courseInstructor: "Ruthvik"
}

const {courseInstructor} = course// this creates a new varable with name courseInsructor and value of this variable is the value of this key in the object.
console.log(courseInstructor)
const {courseInstructor:instructor} = course// this does the same thing as before, but with the variable name is the name given after : 