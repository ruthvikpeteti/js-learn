// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email=email;
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password} abc`
//     }    
// }

// const chai = new User("ruthvik","ruthvik@gmail.com","123")
// console.log(chai.encryptPassword())

// behind the scene

function User(username,email,password){// this is object constructor, this is really just a function
    this.username = username;
    this.email=email;
    this.password=password
}

User.prototype.encryptPassword=function(){
    console.log(`${this.password} abc`);  
}

const tea = new User("ruthvik","ruthvik@gmail.com","123")
console.log(tea.encryptPassword())

