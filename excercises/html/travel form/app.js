
var form = document.travelForm

document.travelForm.addEventListener("submit", function(e){
e.preventDefault()



var first = form.firstName.value
var last = form.lastName.value
var age = form.age.value
var gender = form.gender.value
//location
var locationArr = []
var check = document.querySelectorAll('input[name=location]:checked') 

for (var i = 0; i < check.length; i++){
    locationArr.push(check[i].value)
}
// diet
var dietArr = []
var dietChecked = document.querySelectorAll('input[name=diet]:checked') 

for (var i = 0; i < dietChecked.length; i++){
    dietArr.push(dietChecked[i].value)
}






alert(`first: ${first} \nlast: ${last} \nage: ${age} \ngender: ${gender} \nlocation: ${locationArr} \ndietary restrictions: ${dietArr}`)
})

// var checkedBoxes = document.querySelectorAll('input:checked' ) 

// for(var i = 0; i < checkedBoxes.length; i++){
// locationArr.push(checkedBoxes[i].value)
// }

// console.log(masterArr)
// document.getElementById("screen").innerHTML = masterArr
