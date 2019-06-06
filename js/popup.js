$(document).ready(function () {

	let formDetails = false;
	let detailsHeadline = "";
	let overflowStatus = false;	

	$(".show-popup, .close-btn").on("click", function () {
		formDetails = detailsStatus(this);
		addDetails(formDetails);
		overflowStatus = toggleStatus(overflowStatus);
		toggleOverflow (overflowStatus);
	})

})

function toggleStatus(status) {
	if (status === false) {
		return true;
	}
	else {
		return false;
	}
}

function toggleOverflow (status) {
	if(status === true) {
		$(".overflow").removeClass("overflow_status_hidden");
	}
	else {
		$(".overflow").addClass("overflow_status_hidden");
	}
}

function detailsStatus (button) {
	if ($(button).hasClass("show-details") === true) {
		detailsHeadline = $(button).closest(".offers").find(".offers__headline").text();
		return true;
	}
	else {
		return false;
	}
}

function addDetails(detailsStatus) {
	if(detailsStatus === true) {
		$(".overflow__popup").addClass("popup-details");
		$(".form__nomination-name").text(`"${detailsHeadline}"`);
	}
	else {
		$(".overflow__popup").removeClass("popup-details");
	}
}