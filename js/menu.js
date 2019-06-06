$(document).ready(function () {

	let menuStatus = false;

	$(".hamb-btn").on("click", function () {	
		menuStatus = menuStatus === true ? hideMenu() : showMenu();
	});
	
	if ($(window).width() < 768) {

		$(document).mouseup(function (e){ 
			var div = $(".navbar, .hamb-btn"); 
			if (!div.is(e.target)) { 
				hideMenu();
				menuStatus = false; 
			};
		});

	};
});

function hideMenu() {
	$(".navbar__list").removeClass("navbar__list_status_visible");
	return false;
};

function showMenu() {
	$(".navbar__list").addClass("navbar__list_status_visible");
	return true;
};

