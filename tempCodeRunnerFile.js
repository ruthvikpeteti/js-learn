
const regularUser= {
    email: "some@gmail.com",
    userfullname:{//having a object inside another object.
        name:"Ruthvik",
        surname:"Peteti",
    },
    isLoggedIn : false
}
console.log(regularUser.userfullname.surname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = { obj1, obj2}// it creates a new obj with 1 and 2 obj inside it.
const obj3 = Object.assign({}, obj1, obj2)// {} here is the traget where you want the elements of the objects to be
// if the it is written like Object.assign(obj1,obj2) the elements of obj2 are sent into the target that is obj1 and onj 1 is modified.
// Object.assign always returns the target object
console.log(obj3)

const obj4 = {...obj1, ...obj2}//another way of making a new object with the elements of the other objects that is the elements of obj1 and onj2.
console.log(obj4)

//some object operations/functions
console.log(regularUser)
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))/