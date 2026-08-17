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

// console.log(user)