$(document).ready(function() {
	$(".example__img").on("click", function() {
		if(this.src.indexOf ('.jpg') > 0) {
			this.src = 'img/parallax.gif';
			$(this).prev().hide();
		}
		else {
			this.src = 'img/preview.jpg';
			$(this).prev().show();
		}
	});
});