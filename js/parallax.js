

$(document).ready(function () {

	if ($(window).width() > 1279) {

		document.addEventListener("mousemove", doParallax);

		let toggleStatus = true;

		$(".toggle-button").on("click", function() {
			toggleStatus = toggleStatus === true ? removeParallax() : returnParallax();
		});

	};

});

function removeParallax() {
	document.removeEventListener("mousemove", doParallax);
	$(".parallax").addClass("parallax_status_hidden");
	$(".toggle-button").removeClass("toggle-button_status_on");
	return false;
};

function returnParallax() {
	$(".parallax").removeClass("parallax_status_hidden");
	document.addEventListener("mousemove", doParallax);
	$(".toggle-button").addClass("toggle-button_status_on");
	return true;
};

function doParallax (event) {
	this.querySelectorAll(".layers").forEach(layer => {
		let speed = layer.getAttribute('data-speed');

		layer.style.transform = `translateX(${event.clientX*speed/1500}px)`
	});

}
