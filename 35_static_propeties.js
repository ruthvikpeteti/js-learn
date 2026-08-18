class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

    static createId(){// this function only a propert of the class,  not its instances
        return '123'
    }
}

const ruthvik = new User("ruthvik")
// console.log(ruthvik.createId())// will be an error as statsic element belongs to the class and not an instance of it
console.log(User.createId())// Calling the static method directly on the class

class Teacher extends User {// creating a cladd with users being inherited
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com")

iphone.logMe()
console.log(Teacher.createId())// this works as teacher in inherting from the User

