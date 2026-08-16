// let myName = "Ruthvik"
// console.log(myName.trueLength)
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