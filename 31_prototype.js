let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}

Object.prototype.ruthvik = function(){
    console.log(`ruthvik is present in all objects`)
}

heroPower.ruthvik()
myHeros.ruthvik()

//inheritance

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

teacher.__proto__ = User

//Modren Access
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername= "chaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`)// this the referece of the string we are using it
    console.log(`${this.name}`)//undefined
    console.log(`true name is ${this.trim().length}`)
}

anotherUsername.trueLength()
"ruthvik".trueLength()