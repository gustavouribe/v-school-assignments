
// add button
document.calcNum.add.addEventListener("click", function(event){
event.preventDefault();
    var num1 = document.calcNum.num1.value
    var num2 = document.calcNum.num2.value
    document.getElementById("screen").innerHTML = Number(num1) + Number(num2) 
})
  

// subtract button
document.calcNum.subtract.addEventListener("click", function(event){
    event.preventDefault();
        var num1 = document.calcNum.num1.value
        var num2 = document.calcNum.num2.value
        document.getElementById("screen").innerHTML = Number(num1) - Number(num2) 
    })


// divide button
document.calcNum.divide.addEventListener("click", function(event){
    event.preventDefault();
        var num1 = document.calcNum.num1.value
        var num2 = document.calcNum.num2.value
        document.getElementById("screen").innerHTML = Number(num1) / Number(num2) 
    })


// multiply button
document.calcNum.multiply.addEventListener("click", function(event){
    event.preventDefault();
        var num1 = document.calcNum.num1.value
        var num2 = document.calcNum.num2.value
        document.getElementById("screen").innerHTML = Number(num1) * Number(num2) 
    })

