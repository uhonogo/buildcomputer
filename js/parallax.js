$(document).ready(function(argument) {
	$(window).scroll(function () {
		var lr = $(this).scrollTop();

		$(".head-img").css({
			transform : "translateY(-"+lr/40 +'%)'
		});
	})
});