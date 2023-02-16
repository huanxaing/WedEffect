var picnum = 0;
var style = 0;
$(document).ready(function() {
	for(var j=0;j<5;j++){
		var imgurl = mypics.pics[j].url;
		$("#lipic"+(j+1)).attr("src",imgurl);
	}
	changeimg();
	goin();
	 $("#main").bind("mousewheel", function(event, delta) {
            delta < 0 ? picnum++ : picnum--;
        	changeimg();
			goin();	
     });
	 $(".navli").click(function(){
		style = $(this).val();
		$(this).css("background","#000").siblings().css("background","#0cf");
	
	});
	$(".littlepics").click(function(){
		var altnum = $(this).attr("alt");
		picnum=altnum;
		changeimg();
		goin();	
	});
	$("#pre").click(function(){
		picnum--;
		changeimg();
		goin();	
	});
	$("#next").click(function(){
		picnum++;
		changeimg();
		goin();	
	});

});
function goin(){
	$(".pics").hide();
    var i=0;
	switch(style){
	case 0 :
		var timer=setInterval( function autodo(){
			i++;
			$("#pc"+i).fadeIn(500);
			if(i==12){
				clearTimeout(timer);
					}
			},100);
			break;
	case 1 :
		var timer=setInterval( function autodo(){
			i++;
			$("#pc"+i).show(500);
			if(i==12){
				clearTimeout(timer);
					}
			},100);
			break;
	case 2 :
		var timer=setInterval( function autodo(){
			i++;
			$("#pc"+i).slideDown(500);
			if(i==12){
				clearTimeout(timer);
					}
			},100);
			break;
	case 3 :
		var timer=setInterval( function autodo(){
			i++;
			$("#pc"+i).show().addClass("style4");
			if(i==14){
				clearTimeout(timer);
				$(".pics").removeClass("style4");
					}
			},100);
			break;
	case 4 :
		var timer=setInterval( function autodo(){
			i++;
			$("#pc"+i).show().addClass("style5");
			if(i==14){
				clearTimeout(timer);
				$(".pics").removeClass("style5");
					}
			},100);
			break;
	case 5 :
		var timer=setInterval( function autodo(){
			i++;
			$("#pc"+i).show().addClass("style6");
			if(i==14){
				clearTimeout(timer);
				$(".pics").removeClass("style6");
					}
			},100);
			break;
	}
	
}
function changeimg(){
	if(picnum<0){
		 picnum=0;
	}
	else if(picnum>4){
		 picnum=4;
	}
	var imgurl = mypics.pics[picnum].url;
	$(".pics").css("background-image","url("+imgurl+")");	
}
var mypics = {"pics": [
        {"url": "http://sandbox.runjs.cn/uploads/rs/287/rdxihnzh/4CD747C612005CD508E.jpg"},
        {"url": "http://sandbox.runjs.cn/uploads/rs/287/rdxihnzh/42A41E817EDB0B70949.jpg"},
        {"url": "http://sandbox.runjs.cn/uploads/rs/287/rdxihnzh/82EC0A563613956A9E8.jpg"},
		{"url": "http://sandbox.runjs.cn/uploads/rs/287/rdxihnzh/81463F7890FF1BDABA7.jpg"},
		{"url": "http://sandbox.runjs.cn/uploads/rs/287/rdxihnzh/08E6FDA15296B871201.jpg"}

		/*{"url": "http://m3.img.libdd.com/farm4/2013/0425/18/82EC0A563613956A9E8B4811BB60F9F603052586F2C23_800_450.JPEG"},
        {"url": "http://m1.img.libdd.com/farm4/2013/0425/18/4CD747C612005CD508E02FE5D1B56C84620DC2F17A58B_800_450.JPEG"},
        {"url": "http://m1.img.libdd.com/farm5/2013/0425/18/81463F7890FF1BDABA708996FCD0401CFE58993C881F8_800_450.JPEG"},
		{"url": "http://m3.img.libdd.com/farm5/2013/0425/18/42A41E817EDB0B709492012F69396C96998BF91306E9B_800_450.JPEG"},
		{"url": "http://m1.img.libdd.com/farm4/2013/0425/18/08E6FDA15296B8712013BC81F85262BEAF2ECF5492FA2_800_450.JPEG"}
*/
    ]
};