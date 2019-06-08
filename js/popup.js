$(document).ready(function () {

	let formDetails = false;
	let detailsHeadline = "";
	let overflowStatus = false;	
	
	$(function() {
      $('.form').submit(function(e) {
        var $form = $(this);
        $.ajax({
        	type: $form.attr('method'),
        	url: $form.attr('action'),
        	data: $form.serialize()
        }).done(function() {
        	$(".overflow").addClass("overflow_status_hidden");    
        	$(".form__inputs, .form__message").val('');
        	$(".overflow-message").removeClass("overflow-message_status_hidden");
          	setTimeout(function() {
          	    $(".overflow-message").addClass("overflow-message_status_hidden");
          	}, 2000);
          	overflowStatus = false;
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });

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