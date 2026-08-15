const user = {
    username:"ruthvik",
    loginCount: 10,
    singedIN: true,
    getUserDetails: function(){
        console.log("got user from the data base")
        console.log(`username:${this.username}`)
    }
}
console.log(user.username);
user.getUserDetails()

function User(username, logincount, isloggedin){
    this.username = username
    this.logincount=logincount
    this.isloggedin=isloggedin
    return this
}

userOne = new User("ruthvik",10,true)
userTwo = new User("tomato",5,false)

console.log(userOne);
console.log(userTwo);
