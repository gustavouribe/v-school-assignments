// JS 
    // document.
    // How to create HTML Elements
        // var h1 = document.createElement('h1')
        // var display = document.getElementById('list')
    // How to append HTML Elements
        // h1.innerHTML = "<span>Hey I'm an h1</span>"
        // display.appendChild(h1)

// C-R-U-D:
    // Http:
    
    // Post:    Create
    // Get:     Read
    // Put:     Update 
    // Delete:  Delete


// AJAX - Asynchronous Javascript and XML  (Extensible Markup Language)

    // readystate, onreadystatechange
var xhr = new XMLHttpRequest()
console.log(xhr)

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // parsing is turning raw JSON data (string) into a JS object we can access.
        var data = JSON.parse(xhr.responseText)
        displayData(data)
    }
}


        // 1. request type   2. URL    3. Is Asynchronous
xhr.open("GET", "https://swapi.co/api/people/1/", true)
xhr.send()


function displayData(data){
    var display = document.getElementById('list')
    display.innerHTML = `
                        <h1 class="box">${data.name}</h1>
                        <p> Eye color: ${data.eye_color}</p>
                        <p> Hair Color: ${data.hair_color} </p>
                        `
    display.style.backgroundColor = data.eye_color
    display.classList.add('anotherClass')
}
