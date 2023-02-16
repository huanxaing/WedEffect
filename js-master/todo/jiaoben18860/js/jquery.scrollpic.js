$(function(){

	$.fn.scrollpic = function(options){
		var options = jQuery.extend({
		    preLoadSrc:"../images/loading.gif"
		}, options || {}); 


		var defaults = {
	        defaultSpeed : 1000,   //默认滚动时间  点击按钮滚动时间
			speed : 5000   //自动播放滚动时间
		};

		return this.each(function(){

			//默认
			var options = $.extend(defaults,options);
			var $this = $(this);
			var defaultSpeed = options.defaultSpeed;   //默认滚动时间  点击按钮滚动时间
			var speed = options.speed;   //自动播放滚动时间
			var number=0;
			var oldStartTime = 0;
			var showRightPics;
			var showLeftPics;

			//获取 、 计算
			var bLen = $this.find('.picWrap li').length; 				  //获取图片li的个数
			var $picWrap = $this.find('.picWrap');  					 //获取到图片box
			var $picWrapLi = $this.find('.picWrap li');  				//获取到图片box
			var showIndex = $this.find('.picWrap li.show').index();    //获取图片li.show 当前的
			var $circle = $this.find('.sliderSign li'); 			  //获取滚动圆点的li
			var $btnLeft = $this.find('.slidePre');                  //获取左边的按
			var $btnRight = $this.find('.slideNext'); 				//获取右边的按钮
			var $thisWidth = $this.width(); 					   //获取整个box的width
			var $slideTxtMore = $this.find('.slideTxtMore');  	  //获取更多按钮
			var $sliderTextBox = $this.find('.sliderTextBox');	 //获取文字大的box
			var $sliderTextBg = $this.find('.sliderTextBg');	//获取文字背景
			var $sliderText = $this.find('.sliderText');	   //获取文本名称和介绍的box
			var $sliderTxtBot = $this.find('.sliderTxtBot');	   //获取文本行程
			var $sliderTextAll = $this.find('.sliderTextAll');
			var $sliderShowText = $this.find('.sliderShowText');

			//设置文字下面的背景的width() 和 height()
			$sliderTextBox.height($sliderText.height()  + 10 ).addClass('hidden');  //设置大的文本的box的高度
			$sliderTextBg.width($sliderTextBox.width());
			$sliderTextBg.height($sliderTextBox.height() + 20 + $sliderTxtBot.height());

			//设置div的width() 和 height()
			$picWrap.find('ul').width($thisWidth * bLen);	//设置ul的宽度
			$sliderShowText.width($sliderTextAll * bLen); //设置所有text外层的大box的width
			$sliderTextAll.width($thisWidth);	//设置text外层的box的宽度

			//初始化
			$picWrapLi.eq(0).addClass('show').css({'left':0}).siblings().removeClass('show').css({'left':-$thisWidth}); //初始化时给li添加class="show"
			$sliderTextAll.eq(0).css({'left':0}).siblings().css({'left':-$thisWidth}); //文本外层的div初始化

			//更多按钮点击效果
			$slideTxtMore.eq(showIndex).click(function(){

				if($(this).children().children().hasClass('viewmore')){
					$(this).children().children().removeClass('viewmore');
		    		$(this).children().children().addClass('slideup');
		    		$(this).children().children().html("返回");
		    		$(this).addClass('slideTxtReturn');
					$sliderTextBox.stop().animate({
						height : $sliderText.height() + 20 + $sliderTxtBot.height()
					},500); 
				}else{

				    $(this).children().children().removeClass('slideup');
				    $(this).children().children().addClass('viewmore');
				    $(this).children().children().html("更多");
				    $(this).removeClass('slideTxtReturn');
					$sliderTextBox.stop().animate({
						height : $sliderText.height() + 10 
					},500); 

				}

				return false;

			});

			//右侧滚动公用方法
			function showRightPics() {

				$picWrapLi.eq(showIndex).addClass('show').css({'left':0}).siblings().removeClass('show').css({'left':-$thisWidth}); //初始化时给li添加class="show"
					
			  	if(showIndex+1 == bLen){
    		    	showIndex =- 1;
    			}
    			
    			++showIndex;

    			var beforeIndex = showIndex; //设置当前li（索引）的 前一个li（索引）

    			if(showIndex==0){
    				beforeIndex=bLen;
    			}

    			$picWrapLi.eq(showIndex).animate({left:0},defaultSpeed);  //当前li（索引）的滚动特效

    			//当前li（索引） 和 当前li（索引）的前一个li（索引）的滚动特效
				$picWrapLi.slice(beforeIndex-1,beforeIndex).stop().animate({left:$thisWidth},defaultSpeed,
	    		function(){

	    			$picWrapLi.eq(showIndex).css({'left':'0'}).addClass('show').siblings().removeClass('show').css('left',-$thisWidth);

	    		});

				//更多按钮点击效果
				$slideTxtMore.click(function(){
					
					if($(this).children().children().hasClass('viewmore')){
						$(this).children().children().removeClass('slideup');
					    $(this).children().children().addClass('viewmore');
					    $(this).children().children().html("更多");
					    $(this).removeClass('slideTxtReturn');
						$sliderTextBox.stop().animate({
							height : $sliderText.eq(showIndex).height() + 10 
						},500); 
					}else{
						$(this).children().children().removeClass('viewmore');
			    		$(this).children().children().addClass('slideup');
			    		$(this).children().children().html("返回");
			    		$(this).addClass('slideTxtReturn');
						$sliderTextBox.stop().animate({
							height : $sliderText.eq(showIndex).height() + 20 + $sliderTxtBot.eq(showIndex).height()
						},500); 
					}



				});

				$sliderTextBox.height($sliderText.eq(showIndex).height() + 10 ).addClass('hidden');  //设置大的文本的box的高度

				$sliderTextBg.height($sliderTextBox.height() + 20 + $sliderTxtBot.eq(showIndex).height()); //设置透明背景的高度

				$sliderTextAll.eq(showIndex).css({'left':0}).siblings().css({'left':-$thisWidth}); //设置文本外层的div

				//圆点的滚动效果
				$circle.eq(showIndex).addClass('current').siblings().removeClass('current'); //设置圆点

			}

			//左侧滚动公用方法
			function showLeftPics(){
    			
    			var nextIndex = showIndex == 0 ? (bLen-1) : (showIndex-1); //设置当前li（索引）的 前一个li（索引）
				
				$picWrapLi.eq(showIndex).addClass('show').css({'left':0}).siblings().removeClass('show').css({'left':$thisWidth}); //初始化时给li添加class="show"
    			
    			$picWrapLi.eq(nextIndex).animate({left:0},defaultSpeed);  //下一个 当前li（索引）的滚动特效
					$picWrapLi.eq(showIndex).stop().animate({left:-$thisWidth},defaultSpeed,function(){
	    			$picWrapLi.eq(nextIndex).css({'left':'0'}).addClass('show').siblings().removeClass('show').css('left',$thisWidth);
	    		});

				//更多按钮点击效果
				$slideTxtMore.click(function(){
					
					if($(this).children().children().hasClass('viewmore')){
						
						$(this).children().children().removeClass('slideup');
					    $(this).children().children().addClass('viewmore');
					    $(this).children().children().html("更多");
					    $(this).removeClass('slideTxtReturn');
						$sliderTextBox.stop().animate({
							height : $sliderText.eq(nextIndex).height() + 10 
						},500); 
					}else{
						$(this).children().children().removeClass('viewmore');
			    		$(this).children().children().addClass('slideup');
			    		$(this).children().children().html("返回");
			    		$(this).addClass('slideTxtReturn');
						$sliderTextBox.stop().animate({
							height : $sliderText.eq(nextIndex).height() + 20 + $sliderTxtBot.eq(showIndex).height()
						},500); 

					}

				});

				$sliderTextBox.height($sliderText.eq(nextIndex).height() + 10 ).addClass('hidden');  //设置大的文本的box的高度

				$sliderTextBg.height($sliderTextBox.height() + 20 + $sliderTxtBot.eq(nextIndex).height()); //设置透明背景的高度

				$sliderTextAll.eq(nextIndex).css({'left':0}).siblings().css({'left':$thisWidth}); //设置文本外层的div

				$circle.eq(nextIndex).addClass('current').siblings().removeClass('current'); //设置圆点
				
				showIndex = showIndex==0?(bLen-1):(showIndex-1);

			}

			$btnLeft.click(function(){
				showLeftPics();
			});

			$btnRight.click(function(){
				showRightPics();
			});
			
		});
		
	}	

});