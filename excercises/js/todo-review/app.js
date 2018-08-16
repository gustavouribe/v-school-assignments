/// set up vars


var list = document.getElementById('list')

var data=[
    {
        fname: "John",
        email: "john@john.com",
        imgUrl: "me.png"

    }
]



var div = document.createElement('div')

var p = document.createElementNS('p')
var h3 = document.createElement('h3')
var img = document.createElement('img')
var checkbox = document.createElement('input')

/// Give the elements content
h3.textContent = data[0].fname
p.textContent = data[0].email

img.setAttribute('src', 'https://images.unsplash.com/photo-1534113578008-2092a17e5277?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a68088bab23c9bf0194becf75de0abe&auto=format&fit=crop&w=700&q=80')

// var hiddenInput = document.createElement("input");
//     hiddenInput.setAttribute("id", "uniqueIdentifier");
//     hiddenInput.setAttribute("type", "hidden");                     
//     hiddenInput.setAttribute("value", 'ID');
//     hiddenInput.setAttribute("class", "ListItem");

// $('body').append(hiddenInput)



// put will update existing object
// post will add exising object


/// to give id use setAttribute

// put elemetns into the div
div.appendChild(h3)
div.appendChild(p)
div.appendChild(img)

list.appendChild(div)



/// how to get the mail man id dynamically

// ajax is the long way vs axios the short way 
    // axios needs axios <script>

// ajax is the raw dawg way of getting stuff from an api instead of using Axios
// ajax asyncros js reloading just the parts you need
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
    
    }

// xml is the old version of json, looks more like html but outdated

// research null in constructor functions


// arr vs methoddd

// for loops you can specify Range and customization
// HOM are good for looping through entire arr by default
