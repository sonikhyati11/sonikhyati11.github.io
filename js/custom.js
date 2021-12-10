jQuery(document).ready(function($){
	$(document).on('click','.prod-filter input', function(){
		$(this).parent().toggleClass('active-filter')
	});

});