
var form = document.pestForm

document.pestForm.addEventListener("submit", function(e){
    e.preventDefault()

    var goombaTotal = form.goombaTotal.value
    var cheepTotal = form.cheepTotal.value
    var bobombsTotal = form.bobombsTotal.value


    document.getElementById("totalDisplay").innerHTML = Number(goombaTotal * 5 ) + Number(cheepTotal  * 7 ) + Number(bobombsTotal * 11 )

})