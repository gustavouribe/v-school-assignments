function createEvenArray(num){
    var highestNum = []
    for (var i = 2; i <= num; i+=2){
            highestNum.push(i)
        }
    return highestNum
 }
 console.log(createEvenArray(20))



 function addOdds(arr){
    for (var i = 1; i <= arr.length + 1; i+=2){
            arr.push(i)
        }
    return arr
 }
 console.log(addOdds([2, 4, 6, 8, 10]))


 function sortNums(numberArray) {  
    return numberArray.sort(function(a, b){return a-b});
}
console.log(sortNums([ 2, 4, 6, 8, 10, 1, 3, 5, 7, 9 ]))
