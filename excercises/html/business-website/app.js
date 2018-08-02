//slider code

var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];

var slider = document.getElementsByClassName('slider-parent')[0];

sliderTrigger.addEventListener( "click" , function(e){

	if(slider.classList.contains("active")){
		slider.classList.remove("active");
	}else{
		slider.classList.add("active");
	}

});

var sliderTrigger = document.getElementsByClassName("slider-trigger2")[0];

var slider = document.getElementsByClassName('slider-parent')[0];

sliderTrigger.addEventListener( "click" , function(e){

	if(slider.classList.contains("active")){
		slider.classList.remove("active");
	}else{
		slider.classList.add("active");
	}

});



// load html

// $(function() {
//     var $menu = $('#menu'), 
//         $target = $('#target');

//     $menu.on('click', '> a', function(event) {
//         var $this = $(this);
//         event.preventDefault();
//         $target.load($this.attr('href'));
//     });
// });
