const user = {
    username : "Ruthvik",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    },
}
user.welcomeMessage()
function one(){
    let username = "Ruthvik"
    // console.log(this)
    console.log(this.username)
}
one()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// for single varable function
const addTwo = (num1 ,num2 ) => num1 + num2// this implictitly assumes that you need to return it value hence doent need to write the return keyword.
// for objects the returning object ,ust be inside ()
console.log(addTwo(5,6))