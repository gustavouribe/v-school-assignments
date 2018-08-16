

// axios.get('https://api.vschool.io/gustavouribe/todo').then(function(response){
//     displayElements(response.data);
//     // bindDeleteTodo();

// }).catch(function(err){
//     console.log(err)
// })

var allTodos = []



function getTodos(){

axios.get('https://api.vschool.io/gustavouribe/todo').then(function(response){
    
            allTodos = response.data
            displayElements(allTodos);
            // bindDeleteTodo();

        }).catch(function(err){
            console.log(err)
        })
}

getTodos()




function displayElements(data){
    console.log(data.length)
    var display = document.getElementById('items');
    display.innerHTML = '';
    for(var i = 0; i < data.length; i++){
        var parent, button, div;

        parent = document.createElement('div');        
        button = document.createElement("button");
        button.setAttribute('id', data[i]._id)
        button.className = 'delete-button';
        button.innerHTML = 'delete';
        button.addEventListener('click', function(){
           deleteTodo(this.id)
        })

        parent.appendChild(button);
        
        // checkbox.addEventListener('checkthebox', function(){
        //     if(data.completed === true){
        //         checkboxitem.style.textDecoration = line through
        //     }else{
        //         checkboxitem.style = no line through
        //     }
        // })


        var div = document.createElement('div')
        div.textContent = "title: "
        div.classList.add("objectTitle")
        div.innerHTML = `<span class='objectTitle'>title:</span>`+' '+`<span class='contentTitle'>${data[i].title}</span>`
        parent.appendChild(div)
        var div = document.createElement('div')
        div.innerHTML = `<span class='objectTitle'>price:</span>`+' '+`<span class='contentTitle'>${data[i].price}</span>`
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].description
        div.innerHTML = `<span class='objectTitle'>description:</span>`+' '+`<span class='contentTitle'>${data[i].description}</span>`
        parent.appendChild(div)
        var div = document.createElement('div')
        div.innerHTML = `<span class='objectTitle'>completed:</span>`+' '+`<span class='contentTitle'>${data[i].completed}</span>`
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].imgUrl
        parent.appendChild(div)

        // box around objects
        parent.setAttribute('class', 'todoItem')
        // display all objects
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
    getTodos()
    displayElements(response.data)



  }).catch(function(error){
    console.log(error)
  });
})



    function deleteTodo(todoId) {
        axios.delete("https://api.vschool.io/gustavouribe/todo/" + todoId).then(function(response){
            console.log(response.data)
            getTodos()
        });
        
    };



    // function bindDeleteTodo() {
    //     var parent = document.getElementById('items');

    //     parent.addEventListener('click', function filterButton(e) {
    //         var elm = e.target;
    //         var todoId;
            
    //         if (elm.className == 'delete-button') {
    //             todoId = elm.getAttribute('data-id');
                
    //             // delete the todo and then remove todo from the DOM
    //             deleteTodo(todoId)
    //             .then(function() {
    //                 elm.parentNode.parentNode.removeChild(elm.parentNode);
    //                 alert('Successfully deleted todo ' + todoId)
    //             })
    //             .catch(function(e) {
    //                 alert('There was an error deleting your todo');
    //             });
                
    //         }
    //     })
    // }



















