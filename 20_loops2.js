const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((num)=>num>4)//it return an array which consist of the elements which satisfy the given condition
// here num>4 is implicitly assumed that the values needed to be returned, 
// if we put that in a {} we need to use return keyword because it isnt implictly assumed that the value needs to be returned
// console.log(newnums)
const newnums2= mynums.map((num)=> num+20)// it return a new array with some changes to each element of the original array
// console.log(newnums2)
const newnums3 = mynums.map((num)=> num*2).map((num)=> num+1).filter((num)=> num>=15)
console.log(newnums3)

// reduce() is used to accumulate all elements of the array into a single value
// acc (accumulator) stores the running total
// currval represents the current element in each iteration
// 0 is the initial value of the accumulator

const mytotal = mynums.reduce(function(acc, currval) {
    // add current value to accumulator and return updated total
    return acc + currval
}, 0)
//the 0 in the last is the value of the accumulator we want to start with
// prints the final accumulated value (sum of all elements)
console.log(mytotal);