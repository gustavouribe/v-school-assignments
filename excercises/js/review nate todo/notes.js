// Review
    // Todo Project
        // - Building elements in JS
            // - Giving elements attributes (id, name, value)  
                // when you create it.
        // - Concept of the 'PUT' request.
        // C - POST - Add New Content
        // R - GET - Get Content 
        // U - PUT - Update Todo
        // D - api.todo/id
        var updatedTodo = {
            title: 'asdfasdf'
        }

        axios.post('api.todo/wathever', newTodo)
        // - Checkbox to complete?
        
        function updateTodo(id){
             axios.put(`api.todo/todos/${id}`, updatedTodo)
        }
    // Ajax
        var xhr = new XMLHttpRequest()
        

        xhr.onreadystatechange = function(){
            // .then
            if(xhr.readyState == 4 && xhr.status == 200){
                var jsonData = xhr.responseText
                var data = JSON.parse(jsonData)
                displayData(data)
            }
        }


        // axios.get('url')
        xhr.open('GET', 'url', true)
        xhr.send()

            //  
    // Json
        // => Javascript Object Notion
            {
                "title": "name",
                "address": {
                    "street": "123",
                    "city": "SLC"
                },
                "isAlive": true
            }

    // Constructor Functions
        // - How to instantiate (use) them
        var xhr = new XMLHttpRequest()

      
    // NPM  - commands, installing, adding
        // NODE vs HTML/CSS/JS
        // Debugging, node vs web console
            // NODE does not read HTML, so if you are calling the .document in your app.js
            // file, it will break and say 'document undefined' when you run `node app.js`
            

    // For loops - what are they even good for (absolutely everything)
        // Arr methods

        // For loops are great for customizing HOW the loop works
        // Higher order methods are great if you want to loop through the entire arr by default
        