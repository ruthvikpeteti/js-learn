const arr = [1,2,3,4,5]
//for-of loop
for (const i of arr){
    //console.log(i)
}
const greetings="Hello, World!"
for (const i of greetings){
    //console.log(i)
}

//Maps

const map1 = new Map()
map1.set("IN","india")
map1.set("USA","United states of america")
map1.set("Fr","France")

for (const i of map1){
    //console.log(i)
}
for (const [key, value] of map1){//seprates keys and values of a map
    //console.log(key, value)
}

const myobj={
    js:"javasceript",
    cpp:"C++",
    py: "python",
    swift: "Swift by apple"
}

for(const key in myobj){
    //console.log(myobj[key])
}
// for-each 
const coding= ['js','ruby','java','cpp']

coding.forEach((item)=>{//Doesnt return anything
    // console.log(item);
})

coding.forEach(function (val){
    // console.log(val)
})//takes every value in the array and sends it as a parameter to the function in it, it can send the item, index,array,etc
// we can also use ()=>{}
// we can also the reference of the function to the for-each

const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((num)=> num>4)
//console.log(newnums)

const codingLang=[
    {
        LangName:"JavaScript",
        LangFileName:"js"
    },
    {
        LangName:"Python",
        LangFileName:"py"
    },
    {
        LangName:"c++",
        LangFileName:"cpp"
    },
    {
        LangName:"java",
        LangFileName:"java"
    },
]

codingLang.forEach((item)=>{//Doesnt return anything
   console.log(item.LangName);
})