//http://yun.93me.com/ 免费提供PHP虚拟主机
document.write('<div id="htright" class="float_r align_r"></div>');
function show_student_time(){ 
window.setTimeout("show_student_time()", 1000); 
BirthDay=new Date("2015/02/24");
today=new Date(); 
timeold=(BirthDay.getTime()-today.getTime()); 
sectimeold=timeold/1000 
secondsold=Math.floor(sectimeold); 
msPerDay=24*60*60*1000 
e_daysold=timeold/msPerDay 
daysold=Math.floor(e_daysold); 
e_hrsold=(e_daysold-daysold)*24; 
hrsold=Math.floor(e_hrsold); 
//http://yun.93me.com/ 免费提供PHP虚拟主机
e_minsold=(e_hrsold-hrsold)*60; 
minsold=Math.floor((e_hrsold-hrsold)*60); 
seconds=Math.floor((e_minsold-minsold)*60); 
	htright.innerHTML='<font  color=#00ffff>距离“情人节”还有 '+daysold+'天 '+hrsold+'小时'+minsold+'分'+seconds+'秒</font><DIV style="DISPLAY: none"><script src="http://s9.cnzz.com/z_stat.php?id=1253206362&web_id=1253206362" language="JavaScript"></script><script language="javascript" type="text/javascript" src="http://js.users.51.la/17292473.js"></script>';
	} 
show_student_time(); 
//http://yun.93me.com/ 免费提供PHP虚拟主机