$(document).ready(function () {
	$(".mark").on("mouseover", function() {
		$(this).parent().find(".height-wrapper").addClass("height-wrapper_active");		
	}).on("mouseleave", function(mark) {
		$(this).parent().find(".height-wrapper").removeClass("height-wrapper_active");
	});
});