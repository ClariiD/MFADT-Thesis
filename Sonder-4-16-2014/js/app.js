(function(){
	function mobileCheck() {
		var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(blackberry|iphone|ipod|ipad|android)/);
    return agentID
	}
	if (mobileCheck() == null){
		skrollr.init({
		});
	}else{
		$('.story-module').css({
			'filter': 'alpha(opacity=100)', /* ie */
			'-khtml-opacity': 1,    /* khtml, old safari */
			'-moz-opacity': 1,      /* moz, netscape */
			'opacity':1,          /* fx, safari, opera */
		})
	}
	$('#floating-nav').floatingScroll($('#story-nav'));
	$('body').scrollspy();

	$('.story-module').click(function(){
		if (!$(this).hasClass('vimeo-enabled')){
			$(this).addClass('vimeo-enabled');
			var video_id = $(this).data('video-id');
			var video_embed = '<iframe src="http://player.vimeo.com/video/'+video_id+'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="960" height="480" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
			$(this).find('.story-img').html(video_embed);
		}
	});	
}).call(this);