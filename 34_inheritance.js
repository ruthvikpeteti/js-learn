class User {// declaring a class
    constructor(username){
        this.username = username
    }

    logMe(){// memeber function
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{// inheritance of class users to class techers
    constructor(username, email,password){
        super(username)// this aoutomatically asigns the variable to the class it is inherting from
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai=new Teacher("Chai", "chai@gmail.com","abc123")// we need to use new keyword so that the instance has its own this={} rether than using the globalcontext
chai.addCourse()
chai.logMe()// a inherited member function

const masalaChai = new User("masalaChai")// declaring an instance of User
masalaChai.logMe()

console.log(chai === masalaChai)// both of them are instances of different classes hence the ans is false
console.log(chai instanceof User)// chai is an instance of teacher but it also inherits user so it is also an instance of user