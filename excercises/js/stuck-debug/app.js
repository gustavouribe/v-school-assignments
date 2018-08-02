var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option !== 2){
  option = ask.keyInSelect(options, "What would you like to do today?: ");
  console.log(option)
  if(option === 0){
    console.log("You pick some flowers. You make a bouquet.");
  } else if (option === 1){
    console.log("yea yea yea, You shoot guns.");
  } 
}

console.log("DAAAAAAMMMMN, you fought a bear and died cholo")