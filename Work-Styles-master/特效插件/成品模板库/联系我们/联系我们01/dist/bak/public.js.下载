$(document).ready(function(){
	
	//返回头部
	$(".bar06").click(function() {
		$("body,html").animate({scrollTop:0},500);
	});

	$('.dz-btn').click(function(){
		$('.dz-bg').show();
		$('.dz-model-box').slideDown();
	})

	$('.dz-model-box .close').click(function(){
		$('.dz-model-box').slideUp();
		$('.dz-bg').hide();
	})

	$('.nav-right').toggle(function(){
		$(this).find('.menu01').addClass('menu01-on');
		$(this).find('.menu02').css('opacity','0');
		$(this).find('.menu03').addClass('menu03-on');
		$('.menu-navbox').animate({'width':'100%'});
	},function(){
		$(this).find('.menu01').removeClass('menu01-on');
		$(this).find('.menu02').css('opacity','1');
		$(this).find('.menu03').removeClass('menu03-on');
		$('.menu-navbox').animate({'width':'0%'});
	})


})