var ask = require('readline-sync');

//get name, age, favorite color, etc.

console.log("Welcome to the Terror Zone - can yoouuuuuu diiiiiiig iiiiiiitt!")

var name = ask.question("what yo name is ? ")
console.log("----that's a punk ass name")

var age = ask.question("what yo age is ? ")
console.log("----what? uz a punk")

var from = ask.question("where u from foooooo ? ")
console.log("----WHAT?")
console.log("----aint nuttin but PUNKS in " + from)

var reason = ask.question("----gimme one reason why I shouldn't PUNK U? ")

if (reason.length > 20){
    console.log("----I don't speak PUNKish, you sound like you said summit bout " + reason.length + 
'm@#$%@%@$@sh!!!!fwe ' + reason.substring(reason.length/2, reason.length) + ' ????')
} else {
    console.log("----OH HEEEAAAALLL NO " + name + "! , YOU DID NOT JUST SAY \"" + reason + '\"' )
}

console.log("----last chance before u get hella PUNKED")

var num = ask.question("pick a number punk between " + 0 + " and " + reason.length +   "...")

console.log("----------SIKE, astalavista m*th@ " + reason.substring(0, num) + "lov&&*(* PUUUUUUUNK")
console.log("----........")
console.log("----------..............damn, u just got smoked punk.")