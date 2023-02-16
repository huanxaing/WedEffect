/* ================================================================ 
yandeng  baner轮播图
=================================================================== */
$.fn.banner = function(option){
	var dot = $('.' + option.navigation + ' ul li a'),
		photo = $('.' + option.photo + 'ul li'),
		number = dot.length,
		clickButtom,current,autoPlay,comleft,
		banner = $('.' + option.banner),
		index = 1,
		current = 1,
		button = 1,
		width = option.width,
		imgs = [],
		_img = $('.' + option.banner + ' img'),
		height = banner.height(),
		previous = $('.' + option.previous),
		pheight = previous.height(),
		next = $('.' + option.next),
		navigation = $('.' + option.navigation)
		previous = $('.' + option.previous);
		
	//鼠标移上去前后按钮显示消失  ---可以取消
	banner.hover(function(){
		$('.previous').css('display','block');
		$('.next').css('display','block');
	},function(){
		$('.previous').css('display','none');
		$('.next').css('display','none');
	})
	
	//第一帧的状态---主要是计算了dot点的居中对齐和垂直对齐
	$('.' + option.pic + 1).css('left','0px');
	var comleft = (width - navigation.width())/2/width*100;
	navigation.css("left",comleft + "%");
	var atop = (height - pheight) / 2;
	previous.css({top : atop + 'px'});
	next.css({top : atop + 'px'});
	photo.css({'left':width + 'px'});
	
	//圆点点击事件
	dot.click(function(){
		button = current;
		clickButton = this.href.toString();
		current = clickButton.split('#')[1];
		delayimg(current-1);	
		if(current > button){
			animateLeft(current,button)
		}
		if(current < button){
			animateRight(current,button)
		}
		return false;
	})
	
	//向左运动的函数
	function animateLeft(current,button){
		$('.' + option.pic + current).css('left',width + 'px');
		$('.' + option.pic + current).animate({'left': '0px'},400,"easeOutCirc");
		$('.' + option.pic + button).animate({'left': -width + 'px'},400,"easeOutCirc");
		setButton();
		delayimg(current-1);
	}
	
	//向右运动函数
	function animateRight(current,button){
		$('.' + option.pic + current).css('left',-width + 'px');
		$('.' + option.pic + current).animate({'left': '0px'},400,'easeOutCirc');
		$('.' + option.pic + button).animate({'left': width + 'px'},400,'easeOutCirc');
		setButton();	
		delayimg(current-1);
	}
	
	function delayimg(current){
		var _src = _img.eq(current).attr('data-src')
		if(_img.eq(current).src != _src){
			_img.eq(current).attr('src',_src)	
		}	
	}
	
	//dot点状态的设置
	function setButton(){
		dot.removeClass(option.highlight).eq(current - 1).addClass(option.highlight);
	}
	
	//自动轮播
	autoPlay = setInterval(function (){
		button = current;
		if(current >= number){
			current = 0;
		}
		current ++;
		animateLeft(current, button);
	},option.time)
	
	//前一页点击
	previous.click(function(){
		button = current;
		if(current <= 1){
			current = number+1;	
		}
		current --;
		animateRight(current,button)
	})
	
	//下一页点击
	next.click(function(){
		button = current;
		if(current >= number){
			current = 0;
		}
		current ++;
		animateLeft(current, button);
	})
	
	//鼠标移到banner图里面取消自动轮播
	banner.bind('mouseover',function(e){
		clearInterval(autoPlay);
	})
	
	//鼠标移到banner外面继续轮播
	banner.bind('mouseout',function(event){
		autoPlay = setInterval(function (){
		button = current;
		if(current >= dot.length){
			current = 0;
		}
		current ++;
		animateLeft(current, button);
		},option.time);
		event.stopPropagation(); 
	})
}

function scrollbanner (option) {
	var is = 0; 
	function aotoPlay () {
		if(is == $('#' + option.wrapper + ' ul li').length - 1) {
			is = 0;	
		} else {
			is += 1;
		}
		$('#' + option.wrapper + ' ul').css({'transform' : 'translate(-' + 960 * is + 'px, 0px) scale(1) translateZ(0px)'});	
	}
	var aPlay = setInterval(function (){
		aotoPlay ();
	},3000)
	
}