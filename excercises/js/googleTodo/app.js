var axios = require("axios"); 

axios.get('https://api.vschool.io/natej/todo/5b6dc799eec94d291400b79b').then(function(response){
    displayData(response.data)

}).catch(function(err){
    console.log(err)
})

axios.post('https://api.vschool.io/suzan/todo/', newTodo).then(function(response){  
    console.log(response.data);
}).catch(function(error){
    console.log(error)
});

function displayData(arr){
    // grab list from HTML
    // Loop through the array. 
        // For each Todo object in the array
        // Create a text element (p, h1-16, span)
        // Put todo text in text element
        // Append text element to list on DOM
}


// button submit click 
    // function to get stuff
       

//


// organize button
    // function to move the todo's around
        // the bar get off hidden mode



// checkbox
    // if clicked, the text in the <li> will go strike through and text will look gray.
