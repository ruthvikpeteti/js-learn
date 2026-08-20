"strict"
class user{
    constructor(email,password){// this is a class constructor
        this.email = email,
        this.password = password
    }
    get password(){// this is getter function, it is used to recieve a value from the class, we can use it to get a value from the class with what ever changes we want.
        return `${this._password.toUpperCase()}hello123`
    }
    set password(value){// when there is setter function for a property in the class when the constructor sees a constructor of the class then it passes the value to it.
        this._password = value// we create a new reference in the this obj because if we use password itself then it will cause the constructor to call again then again setter until stck iverflow happen.
    }
    get email(){
        return this._email
    }
    set email(value){
        this._email = value + " shit"// some changes we are making while setting the value in the class obj
    }
}

const ruthvik = new  user("tea@gmail.com", "1234")// creating a new user 
console.log(ruthvik.password)
console.log(ruthvik._email)// we can accesss the the newly created obj as well