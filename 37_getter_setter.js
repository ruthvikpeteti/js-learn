"strict"
class user{
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get password(){
        return `${this._password.toUpperCase()}hello123`
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email
    }
    set email(value){
        this._email = value + " shit"
    }
}

const ruthvik = new  user("tea@gmail.com", "1234")
console.log(ruthvik.password)
console.log(ruthvik._email)