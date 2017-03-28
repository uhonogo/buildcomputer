	function setHeiHeight() {
  		$('#hm').css({
      	height: $(window).height() + 'px'
  		});
	setHeiHeight();
	$(window).resize( setHeiHeight ); };
	jQuery(document).ready(function(){
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#lg').addClass('height');
			} else {
				$('#lg').removeClass('height');
			}
		});

	});
 
});
$(document).ready(function(){
    $(".item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
		$('#info').click(function(e){
  e.preventDefault();
  	$(this).toggleClass('inf-r');
  	$('#infb').toggleClass('infb');

});
$(document).click(function(e) {

   if ($(e.target).closest("#info").length) return;
           $('#info').removeClass('inf-r');
           $('#infb').removeClass('infb');
           indexClick = 0;
   e.stopPropagation();
});