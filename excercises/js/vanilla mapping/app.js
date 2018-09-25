const data = [
    {
        name: "John Snow"
    },
    {
        name: "Cersei Lannister"
    },
    {   
        name: "Hodor"
    },
    {
        name: "Twiyin Lannister"
    },
    {
        name: "The Mother of Dragons"
    },
    {
        name: "White Walker"
    }
]

const startBtn = document.getElementById('btn')

// const map1 = data.map(x => x.name);
// document.getElementById("display").innerHTML = map1

const mapData = arr => {
    const list = document.getElementById('list')
    list.innerHTML = ''
    for(let i = 0; i < arr.length; i++){
        // create an HTML element
        const h3 = document.createElement('h3')
        // put text in that element
        h3.textContent = arr[i].name
        // Append that element to the DOM
        list.appendChild(h3)
    }
}

startBtn.addEventListener('click', () => {
    mapData(data)
})