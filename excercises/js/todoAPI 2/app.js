// C - POST - Add New Content
// R - GET - Get Content 
// U - PUT - Update Todo
// D - api.todo/id

function getTodos (){
    var content = document.getElementById('content')
    content.innerHTML = '';
    axios.get('https://api.vschool.io/gustavouribe/todo').then(function(response){ 
        displayTodos(response.data)

        }).catch(function(err){
            console.log(err)
        })
}

getTodos()



function displayTodos(x){
    var content = document.getElementById('content')
    content.innerHTML = '';
    x.map(function(data){
        console.log(data)
        var id = data._id
        var parent = document.createElement('div');

        var button = document.createElement("button");
        button.innerHTML = 'delete';
        button.addEventListener('click', function(){
           deleteTodo(id)
        })

        parent.innerHTML = `
                title: ${data.title},\n
                description: ${data.description},\n
                price: ${data.price},\n
                       ` 
        parent.appendChild(button)
        parent.setAttribute('class', 'todoDiv') 
 
        content.appendChild(parent)
  })
}


function addTodos(){
    // gather form data using -- html form
    // add a new todo to our api using -- axios.post()
    // refresh todo list with newly added todos using --- getTodos()
    var form = document.todoForm
    var newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
    }
    axios.post('https://api.vschool.io/gustavouribe/todo', newTodo).then(function(response){  
    getTodos()
})
}

document.todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    addTodos()
})

function deleteTodo(id){
    // get element by id and onclick or submit delete the item using --- addEventListener && axios.delete()
    // getTodos() to refresh
    axios.delete("https://api.vschool.io/gustavouribe/todo/" + id).then(function(response){
        console.log(response.data)
        getTodos()
    });



}