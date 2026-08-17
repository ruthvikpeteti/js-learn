function SetUserName(username){
    this.name = username
    console.log("called");
    let othername = username// this property is confied to the scope of setusername and couldnt be accessed by createuser
}

function createUser(username,email,password){
    SetUserName.call(this, username)//this passes the context of createUser to SetUserName and it but it does create a new scope for SetUserName, it just that they share the same this value.
    this.email = email
    this.password = password
    console.log(this.name)
    // console.log(othername);
    
}
const user = new createUser("ruthvik", "@gmail.com", "hello@123");
// Since createUser uses `this` to initialize a new user object, we call it with `new`.
// `new` gives createUser a fresh object as its `this`, so its properties don't get added to the global object.
// Directly calling createUser(...) would be a normal function call and could make `this` refer to the global object.

// console.log(user)