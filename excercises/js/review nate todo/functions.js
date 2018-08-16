function walk(phrase){
    console.log(phrase)
}
var myStr = "hey"


// Export of multiple things must be an object
module.exports = {
    walk: walk,
    myStr: myStr
}