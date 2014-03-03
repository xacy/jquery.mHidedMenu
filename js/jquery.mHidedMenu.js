!function ($) {
	$.fn.hidedMenu = function(options){
		this.each(function(){
			var settings = $.extend({
				closeColor: "#e74c3c",
				backgroundColor: "rgba(252,252,252,0.5)",
				logo: "none"
			}, options );

			$parent=$(this).parent();
			$wrapper=$('<div id="wrap-hid">');
			$parent.append($wrapper);
			$(this).appendTo($wrapper);
			if(settings.logo!="none"){
				$logo=$("#"+settings.logo);
				$logo.addClass("hid-logo");
				$(this).before($logo);
			}
			this.setAttribute('data-state','closed');
			$close=$('<a href="#" class=" hided-close"><span>+</span></a>').css({color: settings.closeColor});
			$(this).after($close);
		});
	}
$( document ).on( "click",".hided-close" , function() {
		$(".hided-close").attr('data-state', $(".hided-close").attr('data-state') === 'open' ? 'closed' : 'open');
		$(this).prev().attr('data-state', $(".hided-close").attr('data-state') === 'open' ? 'open' : 'closed');
		$(this).prev().prev().attr('data-state', $(".hided-close").attr('data-state') === 'open' ? 'closed' : 'open');
		$("#wrap-hid").attr('data-state', $(".hided-close").attr('data-state') === 'open' ? 'open' : 'closed');
	});
}(window.jQuery);