var currentpos,timer;
function initialize()
{
timer=setInterval ("scrollwindow ()",30);
}
function sc()
{
clearInterval(timer);
}
function scrollwindow()
{
currentpos=document.body.scrollTop;
window.scroll(0,++currentpos);
if (currentpos !=document.body.scrollTop)
sc();
}
document.onmousedown=sc
document.ondblclick=initialize
function getUrlParam1(name){nk="亲爱的";
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]);return nk;}  
function getUrlParam3(name){nk="快来DIY自己的情人节表白页！";
//http://yun.93me.com/ 免费提供PHP虚拟主机
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]);return nk;}  
function getUrlParam2(name){nk="情人节表白页";
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]);return nk;
}
function ok(){
var a=document.form1.elements;
if(a[0].value==""){alert("她/他的名字呢？");return false;}
if(a[1].value==""){alert("您的名字呢？");return false;}
if(a[2].value==""){alert("您想要说在话呢？");return false;}
var b=a[0].name+"="+escape(a[0].value)+"&"+a[1].name+"="+escape(a[1].value)+"&"+a[2].name+"="+escape(a[2].value);
var c=window.location.href;
var d=c.split("?");
var e=d[0]+"?"+b;
//http://yun.93me.com/ 免费提供PHP虚拟主机
window.clipboardData.setData('Text',e); 
alert("恭喜您的祝福已成功生成！");
window.location.href=e;}
function oCopy(obj)
{obj.select(); 
js=obj.createTextRange(); 
js.execCommand("Copy");
alert("该网址已经复制到您的剪贴板中，\n\n您可以使用Ctrl+V快捷键粘贴到QQ、论坛、博客等……");} 
//http://yun.93me.com/ 免费提供PHP虚拟主机