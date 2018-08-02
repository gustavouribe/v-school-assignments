
// Write a function that accepts two numbers as parameters, and returns the sum.

function sum(num1, num2){
    return num1 + num2
}
console.log(sum(1, 2))


// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largestNum(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
console.log(largestNum(1, 2, 3))

function largestNum2(arr){
    return Math.max(...arr)
}
console.log(largestNum2([1,2,3]))

function largestNum3(arr){
    var hongKong = 0
    for (i = 0; i < arr.length; i++){
        if (arr[i] > hongKong){
            hongKong = arr[i]
        }
    }
    return hongKong
}
console.log(largestNum3([1,2,3]))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function evenOrOdd(num){
    return num % 2 === 0 ? "even" : "odd"
}
console.log(evenOrOdd(4))


// Write a function that accepts a string as a parameter. 
// If the length of the string is less than or equal to twenty characters long, 
// return the string concatenated with itself (string + string). 
// If the string is more than twenty characters long, return the first half of the string.

function halfString(word){
    if (word.length > 20){
       return word.substring(0, word.length / 2)
    } else if (word.length <= 20){
        return word + word
    }
}
console.log(halfString("thiswordisa;lfja;sldjf;alksjdf;laksldfajds"))

// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. 
// Then print the first ‘n’ Fibonacci numbers and return their sum.

//https://medium.com/quick-code/fibonacci-sequence-javascript-interview-question-iterative-and-recursive-solutions-6a0346d24053

//iteration. calculates linearly and calculates at a constant time value

function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }
console.log(fib(15))

// recursive solution. calculates exponentially and takes a longer time to calculate the bigger the n value
  function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }
console.log(fib(15))


// Write a function to solve the quadratic equation. 
// (It should accept three numbers as parameters, 
// and then return an array with the resulting x values.)
// x = (-b +/- Math.sqrt(b^2 - 4ac))/2a

function solve(a, b, c) {
    // var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    // var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    // return [result, result2]
    return (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
}
console.log(solve(3, 4, 5))



// Write a function that accepts a string as a parameter. 
// Return the most frequently occuring letter in that string.


// Write a function called antiCaps which accepts a string and returns a string. 
// The purpose of the function is to invert the capitalization of each letter in a string. 
// For example: antiCaps('Hello') // hELLO antiCaps('racEcar') // RACeCAR 

function antiCaps(str) {  
    var newStr = ''
    for (var i = 0; i <= str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase()
        } else {
            newStr += str[i].toUpperCase()
        }
    }
    return newStr
    
  }
console.log(antiCaps('Hello'))