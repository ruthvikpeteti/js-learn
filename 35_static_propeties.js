class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

    static createId(){
        return '123'
    }
}

const ruthvik = new User("ruthvik")
// console.log(ruthvik.createId())// will be an error as statsic element belongs to the class and not an instance of it
console.log(User.createId())// directly calling the object and not an instance of it

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com")

iphone.logMe()
