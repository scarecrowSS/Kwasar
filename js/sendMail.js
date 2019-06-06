$(document).ready(function () {
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
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });
});