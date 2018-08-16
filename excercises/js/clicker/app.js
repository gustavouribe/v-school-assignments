var count = localStorage.count || 0
var display = document.getElementById("display")   
           .innerHTML = `${localStorage.count}`


var clickBtn = document.getElementById('clickBtn');
        clickBtn.addEventListener('click', function(){
            // add one to that variable ++
            count ++
           // save that variable in localStorage 
           localStorage.count = count
           // display number from localStorage on the dom 
           var display = document.getElementById("display")   
           .innerHTML = `${localStorage.count}`
        })

// localStorage.setItem('count', 0)
// localStorage.count++