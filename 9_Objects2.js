const course = {
    coursename: "Js full course",
    price: "999",
    courseInstructor: "Ruthvik"
}

const {courseInstructor} = course// this creates a new varable with name courseInsructor and value of this variable is the value of this key in the object.
console.log(courseInstructor)
const {courseInstructor:instructor} = course// this does the same thing as before, but with the variable name is the name given after : 