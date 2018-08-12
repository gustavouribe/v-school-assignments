

axios.get('https://api.vschool.io/gustavouribe/todo').then(function(response){
    displayData(response.data);
    bindDeleteTodo();

}).catch(function(err){
    console.log(err)
})


function displayElements(data){
    var display = document.getElementById('items');
    var parent, button, div, todo;

    parent = document.createElement('div');
    todo = data;
    
    button = document.createElement("button");
    button.setAttribute('data-id', todo._id)
    button.className = 'delete-button';
    button.innerHTML = 'delete';
    parent.appendChild(button);
    
    var div = document.createElement('div')
    div.textContent = data.title
    parent.appendChild(div)
    var div = document.createElement('div')
    div.textContent = data.price
    parent.appendChild(div)
    var div = document.createElement('div')
    div.textContent = data.description
    parent.appendChild(div)
    var div = document.createElement('div')
    div.textContent = data.completed
    parent.appendChild(div)
    var div = document.createElement('div')
    div.textContent = data.imgUrl
    parent.appendChild(div)
    parent.setAttribute('class', 'todoItem')

    display.appendChild(parent)

}



function displayData(data){
    for(var i = 0; i < data.length; i++){
        displayElements(data[i])
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
    displayElements(response.data)

    // parent = document.createElement('div');
    // todo = response.data;
    
    // button = document.createElement("button");
    // button.setAttribute('data-id', todo._id)
    // button.className = 'delete-button';
    // button.innerHTML = 'delete';
    // parent.appendChild(button);
    
    // var div = document.createElement('div')
    // div.textContent = data[i].title
    // parent.appendChild(div)
    // var div = document.createElement('div')
    // div.textContent = data[i].price
    // parent.appendChild(div)
    // var div = document.createElement('div')
    // div.textContent = data[i].description
    // parent.appendChild(div)
    // var div = document.createElement('div')
    // div.textContent = data[i].completed
    // parent.appendChild(div)
    // var div = document.createElement('div')
    // div.textContent = data[i].imgUrl
    // parent.appendChild(div)
    // parent.setAttribute('class', 'todoItem')

    // display.appendChild(parent)


  }).catch(function(error){
    console.log(error)
  });
})



    function deleteTodo(todoId) {
        return axios.delete("https://api.vschool.io/gustavouribe/todo/" + todoId );
    };



    function bindDeleteTodo() {
        var parent = document.getElementById('items');

        parent.addEventListener('click', function filterButton(e) {
            var elm = e.target;
            var todoId;
            
            if (elm.className == 'delete-button') {
                todoId = elm.getAttribute('data-id');
                
                // delete the todo and then remove todo from the DOM
                deleteTodo(todoId)
                .then(function() {
                    elm.parentNode.parentNode.removeChild(elm.parentNode);
                    alert('Successfully deleted todo ' + todoId)
                })
                .catch(function(e) {
                    alert('There was an error deleting your todo');
                });
                
            }
        })
    }



// on click
    //delete function
        
    //display todo
















