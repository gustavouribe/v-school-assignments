

// blue when mouse hovers over square
function turnBlue() {  
   document.getElementById('bigSquare').style.backgroundColor = "blue"
 }
document.getElementById("bigSquare").addEventListener('mouseover', turnBlue)

window.addEventListener('keydown', function(event){
  if(event.key === "b"){
      document.getElementById('bigSquare').style.backgroundColor = "blue"
  }
})


function turnWhite() {  
    document.getElementById('bigSquare').style.backgroundColor = "white"
  }
document.getElementById("bigSquare").addEventListener('mouseout', turnWhite)

window.addEventListener('keydown', function(event){
  if(event.key === "w"){
      document.getElementById('bigSquare').style.backgroundColor = "white"
  }
})

//red when the mouse button held down over square
function turnRed() {  
    document.getElementById('bigSquare').style.backgroundColor = "red"
  }
document.getElementById("bigSquare").addEventListener('mousedown', turnRed)

window.addEventListener('keydown', function(event){
  if(event.key === "r"){
      document.getElementById('bigSquare').style.backgroundColor = "red"
  }
})

// yellow when mouse button is let go over square

function turnYellow(){  
    document.getElementById('bigSquare').style.backgroundColor = "yellow"
  }
document.getElementById("bigSquare").addEventListener('mouseup', turnYellow)

window.addEventListener('keydown', function(event){
  if(event.key === "y"){
      document.getElementById('bigSquare').style.backgroundColor = "yellow"
  }
})

// green when the mouse is double clicked in the square

function turnGreen(){  
    document.getElementById('bigSquare').style.backgroundColor = "green"
  }
document.getElementById("bigSquare").addEventListener('dblclick', turnGreen)

window.addEventListener('keydown', function(event){
  if(event.key === "g"){
      document.getElementById('bigSquare').style.backgroundColor = "green"
  }
})


// orange when thee mouse scroll is used somewhere in the window 
//(not jsut over the square)

function turnOrange(){  
    document.getElementById('bigSquare').style.backgroundColor = "orange"
  }
document.getElementById("wrapper").addEventListener('wheel', turnOrange)

window.addEventListener('keydown', function(event){
    if(event.key === "o"){
        document.getElementById('bigSquare').style.backgroundColor = "orange"
    }
})

/*
var display = document.getElementById('diplay')
  console.dir(display)


window.addEventListener('keydown', function(event){
  if(event.code === "keyO"){
      display.style.backgroundColor = "orange"
  }
})



// be able to press the first letter of the above and colores and have the box change to that color.

*/