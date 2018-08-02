var ask = require('readline-sync');

console.log("GANGSTA CALULATOR")
console.log("Yo we gonna crunch some numbers and shit")

var num1 = ask.question("gimme yo first number : ")
var num2 = ask.question("gimme yo second number : ")

function add (num1, num2){
    return Number(num1) + Number(num2)
}
function subtract (num1, num2){
    return Number(num1) - Number(num2)
}
function multiply (num1, num2){
    return Number(num1) * Number(num2)
}
function divide (num1, num2){
    return Number(num1) / Number(num2)
}




console.log("ok so we got " + num1 + " and " + num2)
var responce = ask.question("what u want me to do: add, subtract, multiply or divide? ")

if (responce === "add"){
    console.log(add(num1, num2))
} else if (responce === "subtract"){
    console.log(subtract(num1, num2))
} else if (responce === "multiply"){
    console.log(multiply(num1, num2))
} else if (responce === "divide"){
    console.log(divide(num1, num2))
} else {
    console.log("WHAT? u a PUNK!!!")
}



