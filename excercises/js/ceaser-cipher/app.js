var ask = require('readline-sync')

var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));  

function ceasarCipher(str, shift){
    // declare empty string to build
    var encrypted = ""
    // declare a variable that holds the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    // loop/iterate through the string
    for (var i = 0; i < str.length; i++){
        //check letter
            if(str.indexOf(str[i]) !== -1){
                var currentIndex = alphabet.indexOf(str[i])
                encrypted += str[(currentIndex + shift) % 26]
            } else {
                encrypted += str[i]
            }
            //shift it to right
            encrypted += (currentIndex + shift)
    }
    return encrypted

}
console.log(ceasarCipher(input, shift))