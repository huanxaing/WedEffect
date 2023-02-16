$(document).ready(function(){ 
var picWidth = $(".v_content_list").width(); //获取显示焦点图的宽度
var len = $(".v_content_list ul li").length; //获取焦点图个数
var img_container = $(".v_content_list ul"); //定义变量
var button_container = $(".highlight_tip li"); //定义变量
var index = 0; //初始化index=0

//设置tab按钮的背景透明度为0.5
//$(".highlight_bg").css("opacity","0.5")
	
//为tab按钮添加鼠标滑入事件，以显示相应的内容
button_container.mouseenter(function() {
	index = button_container.index(this);
	showPics(index);
}).eq(0).trigger("mouseenter");

//计算出外围ul元素的宽度
img_container.css("width",picWidth * (len));
	
//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
$(".v_content_list").hover(function() {
	clearInterval(picTimer);
},function() {
	picTimer = setInterval(function() {
		showPics(index);
		index++;
		if(index == len) {index = 0;}
	},4000); //4000代表自动播放的间隔，单位：毫秒，1秒=1000毫秒
}).trigger("mouseleave");
	
//显示图片函数，根据接收的index值显示相应的内容
function showPics(index) { //默认效果
	var nowLeft = -index*picWidth; //根据index值计算ul元素的left值
	//alert(nowLeft);
	img_container.stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	button_container.eq(index).addClass("current").siblings().removeClass("current"); //为当前的tab按钮添加class="current"
	//button_container.eq(index).stop(true).animate({"opacity":"1","top":-5+"px"},300).siblings().stop(true).animate({"opacity":"0.6","top":10+"px"},300); //为当前的tab按钮添加选中的效果
	}
})