let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}
// we are creating a new function in prototype of ibject it the highst most prototype in the tree and all other elements inherit properties from the object class, hence this prototype could be used used by array object string etc.
Object.prototype.ruthvik = function(){
    console.log(`ruthvik is present in all objects`)
}

heroPower.ruthvik() // demonstration of the prototype declared for object class being used for array and object
myHeros.ruthvik()

//inheritance
// using the prototype feature to to inherit properties from one object to another

const User = {
    name: "chai",

}

const teacher = {
    makevideo : false,
    email : "chai.js@gmail.com"
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAsssignment: 'js assignment',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = User// this type of inhertiance can also be used to pass protoype access to objects in a similar hirarchy in the tree say both array and string are derived from object indipendently so they cant directly each others functions, but with tihs they could
console.log(teacher.name)
console.log(teacher.email)
console.log(teacher.makevideo)
// what the above line does is
// teacher
// ├── makevideo: false
// ├── email: "chai.js@gmail.com"
// │
// └── [[Prototype]] → User
//                     └── name: "chai"
//in this arrangement the user is above teacher prototype

//Modren Access
Object.setPrototypeOf(teachingSupport,teacher)//in this teaching support derives from teacher which already derives from teacher so it could access from both of them.

let anotherUsername= "chaiAurCode   "
// we are declaring a prototype function for the string in perticular.
String.prototype.trueLength = function(){
    console.log(`${this}`)// this refers to the perticular string calling it.
    console.log(`${this.name}`)//undefined
    console.log(`true name is ${this.trim().length}`)// .length method returns the number of characters.
}

anotherUsername.trueLength()
"ruthvik".trueLength()