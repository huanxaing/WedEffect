$(document).ready(function(){
	
	$('.portfolio li').click(function() {
		
		var new_feature = $(this);
		
		if (!new_feature.hasClass('feature')){
		
			$('li.feature').removeClass('feature');
		
			setTimeout(function(){

				new_feature.addClass('feature');

			}, 500);
		
		}
		
	});
	
});