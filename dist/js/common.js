var ProjectApp = function (){

	function addClass(elem, clas) {
		elem.classList.add(clas);
	}

	function removeClass(elem, clas) {
		elem.classList.remove(clas);
	}

	var callBackBtn = document.getElementById('callBackBtn'),
		callBackBtn2 = document.getElementById('callBackBtn2'),
		overlay = document.getElementById('overlay'),
		popup = document.getElementById('popup'),
		moreBtn = document.querySelectorAll('.btn__price'),
		consultForm = document.querySelector('.consult__form'),
		callBackForm = document.querySelector('.callback__form'),
		closePopupBtn = document.getElementById('close');

	function popupToggle(e) {
		var target =  e && e.target ? e.target : e.srcElement;

		if(target.getAttribute('data-id') === 'show') {
			if(consultForm) {
				consultForm.style.cssText = 'display: block';
			}

			if(callBackForm) {
				callBackForm.style.cssText = 'display: none';
			}

			addClass(overlay, 'active');
			addClass(popup, 'active');
			
		} else if (target.getAttribute('data-id') === 'callback') {
			if(consultForm) {
				consultForm.style.cssText = 'display: none';
			}

			if(callBackForm) {
				callBackForm.style.cssText = 'display: block';
			}


			addClass(overlay, 'active');
			addClass(popup, 'active');
			
		
		} else if (target.getAttribute('data-id') === 'close') {

			removeClass(overlay, 'active');
			removeClass(popup, 'active');
			
		}
	}

	if (callBackBtn2) {callBackBtn2.addEventListener('click', popupToggle);};
	if(moreBtn) {
		for (var i = 0; i < moreBtn.length; i++) {
			moreBtn[i].addEventListener('click', popupToggle);
		}
	}

	if(callBackBtn) {
		callBackBtn.addEventListener('click', popupToggle);
	}
	
	
	overlay.addEventListener('click', popupToggle);
	closePopupBtn.addEventListener('click', popupToggle);


};

window.addEventListener('DOMContentLoaded', function() {
	new ProjectApp();
}) 

$(document).ready(function(){
	$('#menuBtn').on('click',function(){
		$("#nav").slideToggle('slow');
	});
// Map
  // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
	var that = $(this);

	that.on('click', onMapClickHandler);
	that.off('mouseleave', onMapMouseleaveHandler);
	that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
	var that = $(this);

	// Disable the click handler until the user leaves the map area
	that.off('click', onMapClickHandler);

	// Enable scrolling zoom
	that.find('iframe').css("pointer-events", "auto");

	// Handle the mouse leave event
	that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.google__map').on('click', onMapClickHandler);

// Labels
$('.input input').change(function() {
  console.log("hi");
	if($(this).val() != '') $(this).parent().children('label').addClass('active');
	else $(this).parent().children('label').removeClass('active');
});

$('.input__item--phone').mask('+7 (999) 999-99-99');

$('#moreFeedbacks').on('click', function() {
  $(this).toggleClass('active');
  $('.feedback__hidden').slideToggle("slow");
});

$('.toggle__cell').on('click', function() {
	$(this).parent().parent().parent().next('.tbody').stop().slideToggle(500);

});

$(".fancybox").fancybox({
	openEffect  : 'elastic',
	closeEffect : 'elastic'
  });

$('#slider').owlCarousel({
	    loop:true,
	    items:4,
	    dots:false,
	    navText:['',''],
	   nav:true,
	    responsive:{
	        0:{items:2},
	        600:{items:3},
	        1000:{items:4}
    	}
	});

$('#sliderAccess').owlCarousel({
	    loop:true,
	    items:4,
	    dots:false,
	    navText:['',''],
	   nav:true,
	    responsive:{
	        0:{items:1},
	        600:{items:3},
	        1000:{items:4}
    	}
	});

$(".contact__form").submit(function(e) {
	e.preventDefault();
 //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		setTimeout(function() {
			$("#popup").removeClass("active");
			$("#overlay").removeClass("active");
			th.trigger("reset");
		}, 1000);

	});
	return false;
});

	
});

