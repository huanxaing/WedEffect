/*******************
开发制作,Jason.Leung
QQ,147430218
该插件仅供学习参考使用
*******************/
/* 酷站代码整理 http://www.5icool.org */
function myEvent(obj,ev,fn){
	if (obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	};
};

function getByClass(obj,sClass){
	var array = [];
	var elements = obj.getElementsByTagName('*');
	for (var i=0; i<elements.length; i++){
		if (elements[i].className == sClass){
			array.push (elements[i]);
		};
	};
	return array;
};

var cs_box = {
	set : function(json){
		this.box = document.getElementById('cs_box');
		this.setimg(json);
		this.qqfn(json);
		this.cs_close();
	},
	setimg : function(json){
		this.img_box = getByClass(this.box,'cs_img')[0];
		var img_e = document.createElement('img');
		img_e.src = json.img_path;
		img_e.style.width = img_e.style.height = 100+'px';
		this.img_box.appendChild(img_e);
	},
	qqfn : function(json){
		this.btn = getByClass(this.box,'cs_btn')[0];
		var link = 'http://wpa.qq.com/msgrd?v=3&uin='+json.qq+'&site=qq&menu=yes';
		this.btn.onclick = function(){
			window.open(link,'_blank');
		};
	},
	cs_close : function(){
		this.btn = getByClass(this.box,'cs_close')[0];
		var _this = this;
		var speed = 0;
		var timer = null;
		var sh = document.documentElement.clientHeight || document.body.clientHeight;
		this.btn.onclick = function(){
			clearInterval(timer);
			timer = setInterval(function(){
				speed += 4;
				var t = _this.box.offsetTop + speed;
				if (t >= sh-_this.box.offsetHeight){
					speed *= -0.8;
					t = sh-_this.box.offsetHeight;
				};
				if (Math.abs(speed)<2)speed = 0;
				if (speed == 0  && sh-_this.box.offsetHeight == t){
					clearInterval(timer);
					_this.fn();
				};
				_this.box.style.top = t + 'px';
			}, 30);
		};
	},
	fn : function(){
		var _this = this;
		var timer = setTimeout(function(){
			_this.box.style.display = 'none';
		}, 1000);
	},
};