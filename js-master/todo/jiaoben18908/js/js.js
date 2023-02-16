// JavaScript Document
$(document).ready(function(e) {
    var   ImgBox = $(".img-box"),
	      ImgSpan =ImgBox.find("span"),
	      ImgDiv = $(".img-box div"),
		  BtnNext = $("#btn-next"),
		  BtnPrve = $("#btn-prev"),
		  Btn = $(".btn"),		  
		  speed = 600,//设置动画的运动时间
		  Tick = 4000+speed,//设置定时器的间隔时间
		  n=1,//设置张数计数器
		  whichCl ,//设置判断点击了哪一个按钮 
		  z=0;//设置当前动画计数器
		  ImgSpan.html("第 "+n+" 张/共 "+ImgDiv.length+" 张");
		  function Slider(){//动画函数
			  if(whichCl=="nextCl"){
				      n++; if(n>ImgDiv.length){n=1;}
			          z--; if(z<0){z=ImgDiv.length-1;}
				 }
			  if(whichCl=="prevCl"){ n--; if(n<1){n=ImgDiv.length;}}  
			  ImgSpan.html("第 "+n+" 张/共 "+ImgDiv.length+" 张");
			  ImgDiv.eq(z).stop().animate(
			       {right:-(1.1*ImgDiv.width())}, speed,
			        function(){
			                     if(whichCl=="nextCl"){ImgSpan.after($(this));}
			                     if(whichCl=="prevCl"){ImgBox.append($(this));}
			                     $(this).stop().animate({right:0}, speed);
			                   }) 
			  if(whichCl=="prevCl"){ z++; if(z>ImgDiv.length-1){z=0;}} 
			  ImgBox.stop().animate({right:100},speed,function(){$(this).stop().animate({right:0}, speed)})
			  ImgSpan.stop().animate({left:395},speed,function(){$(this).stop().animate({left:295},speed)})
			  }   
		  BtnNext.click(next_cl = function(){whichCl="nextCl";Slider();});//向右点击事件启动动画函数
		  BtnPrve.click(prev_cl = function(){whichCl="prevCl";Slider();});//向左点击事件启动动画函数	
		  Btn.hover(function(){clearTimeout(autoTime)},function(){autoTime = setInterval(next_cl,Tick);})//当鼠标进入点击按钮时对定时器进行控制		
		  autoTime = setInterval(next_cl,Tick);	//模拟向右点击事件定时启动动画函数，也可以使用  prev_cl向左启动动画函数 
});