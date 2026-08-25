// Immediately Invoked function expression

(function chai(){//named iife
    console.log(`DB connected`)
})();//in first () we write the function that is being invoked and in the second tells it to iife
//In IIFE we need to end it with a ; becz auto ; insertion might get mistaken with () and ;

((username) => {// unnamed iife
    console.log(`Db connected two ${username}`);
})("Ruthvik")