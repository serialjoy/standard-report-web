$(document).ready(function(){
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	});

	$('.ui.huge.primary.button').click(function(){
		$('.ui.sidebar.ui.segment').sidebar('toggle');		
	});

});

