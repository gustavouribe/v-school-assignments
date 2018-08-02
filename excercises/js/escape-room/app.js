//npm init -y

//npm install --save readline-sync
//or
//npm i -S readline-sync


var readline = require('readline-sync');

var name = readline.question('Welcome to the Escape Room, what is your name? ');

//template literals
console.log(`Hello ${name}, you have entered a room. Your goal is to escape, good luck ${name}! \n`)

var isAlive = true;
var hasKey = false;

while(isAlive){
    var choices = ['Put hand in hole', 'Find the key', 'Open the door'];
    var index = readline.keyInSelect(choices, "What would you like to do? ");

    if(choices[index] === 'Put hand in hole'){
        console.log('oohhh.....You dead.')
        isAlive = false;
        
    }
    if(choices[index] === 'Open the door'){
        if(hasKey){
            console.log('the door was opened')
            isAlive = false
        }else{
            console.log('go find the key')
            isAlive = false
        }
    }
    if(choices[index] === 'Find the key'){
        hasKey = true 
        console.log('ok cool, you got the key')
        
    }











}