const accountId= 144553
let accountEmail="peteti.ruthvik@gmail.com"
var accountPswd="1234"// Doesnt follow scope.
accountCity="Gurgaon"// it is global variable, and not a good practice.
let accountState;//Undefined varable

console.log(accountCity)
console.table([accountId,accountEmail,accountPswd,accountCity])//Prints a set of elements in a form of table
