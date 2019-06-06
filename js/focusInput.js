window.onload = function () {
	$(".form__inputs, .form__message").val('');
}

$(document).ready(function () {

	$(".form__focus").on("focus", function() {
		$(this).next(".form__abs-container").addClass("form__abs-container_status_focus");
	});
	
});