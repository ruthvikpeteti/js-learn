class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai=new Teacher("Chai", "chai@gmail.com","abc123")
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai instanceof masalaChai)