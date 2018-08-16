var list = document.getElementById('list')

var data=[
    {
        fname: "John",
        email: "john@john.com",
        imgUrl: "me.png"
    }
]


// Create your elements
var div = document.createElement('div')

var p = document.createElement('p')
var h3 = document.createElement('h3')
var img = document.createElement('img')
var checkbox = document.createElement('input')
var button = document.createElement('button')
console.log(button)

button.addEventListener('click', function(){

})

// Give the elements Content
h3.textContent = data[0].fname
p.textContent = data[0].email


img.setAttribute('src', 'https://images.unsplash.com/photo-1534113578008-2092a17e5277?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a68088bab23c9bf0194becf75de0abe&auto=format&fit=crop&w=1900&q=80')
checkbox.setAttribute('type', 'checkbox')


// Put elements into the Div
div.appendChild(h3)
div.appendChild(p)
div.appendChild(img)
div.appendChild(checkbox)


// Put build Div onto the DOM
list.appendChild(div)