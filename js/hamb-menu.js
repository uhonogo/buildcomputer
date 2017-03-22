            var join = $('.show-hide'),
                joinLink = $('#touch-menu'),
                indexClick = 0;
        $ ( function() {

            joinLink.click( function(event) {
                
                if (indexClick === 0) {
                    join.addClass('visible');
                    join.removeClass('show-hide');
                    indexClick = 1;
                    joinLink.removeClass('mobile-menu');
                    joinLink.addClass('line');
                    $('#btn').addClass('whtbg');
                }
                else {
                    join.addClass('show-hide');
                    join.removeClass('visible');
                    indexClick = 0;
                    joinLink.addClass('mobile-menu');
                    joinLink.removeClass('line');
                    $('#btn').removeClass('whtbg');
                }
                event.stopPropagation();
            });
        });
        $(document).click(function(event) {
            
            if ($(event.target).closest(".show-hide").length) return;
                    join.addClass('show-hide');
                    join.removeClass('visible');
                    indexClick = 0;
                    joinLink.addClass('mobile-menu');
                    joinLink.removeClass('line');
                    $('#btn').removeClass('whtbg');
            event.stopPropagation();
        });