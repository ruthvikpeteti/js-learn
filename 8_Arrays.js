const myArr = [0,1,2,3,4,5]
console.log(myArr)
console.log(typeof(myArr))
console.log(myArr[1])

myArr.push(9)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(0)// add the given number at the start of the array.
console.log(myArr)

console.log(myArr.includes(9))//Tells if the given number exists or not.
console.log(myArr.indexOf(15))//prints the index of the given value if it is present else prints -1.

const myArr1 = myArr.slice(1,3)//Returns the values strating from index 1 and till 1 minus the stop.
console.log(myArr)

const myArr2 = myArr.splice(1,3)//Returns from start and to stop of the index, and removes those from the main array.
console.log(myArr)

