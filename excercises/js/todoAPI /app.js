

axios.get('https://api.vschool.io/gustavouribe/todo').then(function(response){
    displayData(response.data)

}).catch(function(err){
    console.log(err)
})



function displayData(data){
    var display = document.getElementById('items')
    for(var i = 0; i < data.length; i++){
        var parent = document.createElement('div')
        
        var button = document.createElement("button");
        button.setAttribute('id', 'deleteBtn')
        button.innerHTML = 'delete';
        parent.appendChild(button)
        
        var div = document.createElement('div')
        div.textContent = data[i].title
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].price
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].description
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].completed
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].imgUrl
        parent.appendChild(div)
        parent.setAttribute('class', 'todoItem')


        display.appendChild(parent)
         // parent.appendChild(button)
         // add a delete button to html <button>delete</button>

    }
 }


var form = document.formTodo

form.addEventListener("submit", function(e){
 e.preventDefault()


var title = form.title.value
var price = form.price.value
var description = form.description.value
var url = ''
var completed = ''

var newTodo = {  
    title: title, // this one is the only thing that is actually required
    description: description,
    price: price, // Must be a number of some kind (integer or float)
    imgUrl: url,
    completed: completed // must be a boolean (true or false). If nothing provided, defaults to false.
};

console.log(newTodo)

axios.post('https://api.vschool.io/gustavouribe/todo', newTodo).then(function(response){  
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  });
})

document.getElementById("deleteBtn").addEventListener("click", function(){
    // document.getElementById("demo").innerHTML = "Hello World";
    console.log('my delete function button works')
});

var deleteTodo = function(singleTodoObject) {
    // This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
    // I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
        axios.delete("https://api.vschool.io/gustavouribe/todo/" + singleTodoObject._id).then(function(response) {
            // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
            // Assuming I used the object from the example above.
            alert("Your todo was successfully deleted!")
        }, function(response) {
            alert("There was a problem deleting your todo :(");
        });
    };






















