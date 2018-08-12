

axios.get('https://api.vschool.io/gustavouribe/todo').then(function(response){
    displayData(response.data);
    bindDeleteTodo();

}).catch(function(err){
    console.log(err)
})



function displayData(data){
    var display = document.getElementById('items');
    var parent, button, div, todo;

    for(var i = 0; i < data.length; i++){
        parent = document.createElement('div');
        todo = data[i];
        
        button = document.createElement("button");
        button.setAttribute('data-id', todo._id)
        button.className = 'delete-button';
        button.innerHTML = 'delete';
        parent.appendChild(button);
        
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




















