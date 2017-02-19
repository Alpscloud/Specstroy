var ProjectApp = function (){
	// My app scripts
};

window.addEventListener('DOMContentLoaded', function() {
	new ProjectApp();
}) 


$("#contactForm").submit(function(e) {
	e.preventDefault();
 //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);

	});
	return false;
});