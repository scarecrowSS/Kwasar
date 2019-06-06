$(document).ready(function() {
	if ($(window).width() > 1279) {
		$('.mainbag').viewScroller({
			fixedWidth: true,
			useKeyboard: true,
			animEffectMainView: 'easeOutCubic',
			afterChange: function() { 
				$(".navbar__item").removeClass("active");
				let url = location.href;
				let splitedUrl = url.split('#');  
				let target = $(`[href = '${"#" + splitedUrl[1]}']`).parent();
				$(target).addClass('active'); 
			}
		});
	};
});
