// Implement all of the listed String Methods below using at least 3 unique Functions..

// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace() x
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase() x
// .substr()

function upperCaseEven(str){
    var str1 = ''
    for (var i = 0; i < str.length; i+=2){
        str1 += str[i].toUpperCase()
    }
    return str1
}
console.log(upperCaseEven('wordwrwersdser'))

function replaceXsWithOs(str){
    var str1 = ''
    for (var i = 0; i < str.length; i++){
      if (str[i] === 'x'){
        str1 += str[i].replace('x', 'o')
      } else {
        str1 += str[i]
      }
    }
    return str1
}
console.log(replaceXsWithOs('wordwrwsxxxxxxersdser'))

