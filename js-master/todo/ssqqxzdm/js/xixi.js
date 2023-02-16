//하다마이 플래시 삽입 자바스크립트-액티브엑스패치대비
//2006-02-09
//각 속성 외부 입력.다중사용.

function FlashInsert(FlashIDName, FlashFileName, FlashWidth, FlashHeight, DNSSetting, WMODESetting, FlashBGColor, QSetting, FlashAlign)
{
	document.write('<OBJECT CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	document.write('CODEBASE="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=8,0,22,0" ');
	document.write(' id="'+FlashIDName+'" width="' + FlashWidth + '" height="' + FlashHeight + '" ALIGN="'+FlashAlign+'">');
	document.write('<PARAM NAME="movie" VALUE="'+ FlashFileName +'">');
	document.write('<PARAM NAME="quality" VALUE="'+QSetting+'">');
	document.write('<PARAM NAME="bgcolor" VALUE="'+FlashBGColor+'">');
	document.write('<PARAM NAME="wmode" VALUE="'+WMODESetting+'">');
	document.write('<PARAM NAME="allowScriptAccess" VALUE="'+DNSSetting+'">');
	document.write('<EMBED swLiveConnect=true SRC="'+ FlashFileName +'"  NAME="'+FlashIDName+'"');
	document.write(' WIDTH="' + FlashWidth + '" HEIGHT="' + FlashHeight + '" QUALITY="'+QSetting+'" BGCOLOR="'+FlashBGColor+'"');
	document.write(' ALLOWSCRIPTACCESS="'+DNSSetting+'" ALIGN="'+FlashAlign+'" WMODE="'+WMODESetting+'" TYPE="application/x-shockwave-flash" ');
	document.write(' PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" >');
	document.write('</EMBED>');
	document.write('</OBJECT>');
}