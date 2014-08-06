$(document).ready(function(){
	$('.login_button').click(function(){
		$.ajax({
			url:'/api/woot',
			data: {id:123, name:'Katie'},
			type: 'POST'
		});	

	});


});