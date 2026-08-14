const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function()
{
    console.log("promise consumed")
})

new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promiseThree = new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve({username: "momo",email:"momo@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username:"momo",password:"momos"})
        } else {
            reject('error:something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username

}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>console.log("the promise is finally resolved or rejected"))

const promiseFive = new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username:"momo",paasword:"momos"})
        } else {
            reject('error:something went wrong')
        }
    },1000)  
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
        
    }
}
consumePromiseFive()

