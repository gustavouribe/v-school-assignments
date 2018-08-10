var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
   if(xhr.readyState == 4 && xhr.status == 200){
       var data = JSON.parse(xhr.responseText)
       parsePokemon(data.objects[0].pokemon)
   }
}



xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()

function parsePokemon(data){
   var display = document.getElementById('list')
   for(var i = 0; i < data.length; i++){
       // console.log(data[i].name)
       var h1 = document.createElement('h1')
       var poke = document.createTextNode(data[i].name)
       h1.appendChild(poke)
       //put text into the element
       display.appendChild(h1)
       //append text to dom
   }
}