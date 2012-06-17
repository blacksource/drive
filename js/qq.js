// JavaScript Document
<!--
function CloseQQ()
{
searchspe.style.display="none";
return true; 
}
var online= new Array();
var qq="[在线客服]<br>|1756449901,[在线客服]<br>|1320522535";
var qqlist=new Array(); //直接初始化
var qqtype=new Array();
    qqlist=qq.split(",");
var qqlistN=2; //n为长度，元素个数，也即最大数加1
document.writeln("<div id=\"searchspe\" style=\"Z-INDEX: 50; left: 1px; POSITION: absolute; TOP:-50px;font-size:12px;text-align:center;\">");
document.writeln("<div style=\"width:109px;text-align:center;\">");
document.writeln("<A onclick=CloseQQ() href='javascript:;' shape='circle' coords='91,16,12'><IMG height=34 src='/img/qq_top.gif' width=109 useMap=#Map border=0></A><div style=\"padding:8px;background-image:url(/img/qq_d.gif);text-align:center;\">");
for(i=0;i<qqlistN;i++)
{
	qqtype=qqlist[i].split("|");
document.writeln(""+qqtype[0]+"<a target=blank href=http://wpa.qq.com/msgrd?V=3&Uin="+qqtype[1]+"&Site=QQ服务&Menu=yes><img border=0 src=http://wpa.qq.com/pa?p=2:"+qqtype[1]+":42 alt=点击这里给我发消息 title=点击这里给我发消息></a><br />");
}
document.writeln("</div>");
document.writeln("<IMG height=\"30\" src=\"/img/qq_bottom1.gif\" width=109><IMG height=33 src=\"/img/qq_logo.gif\" width=\"109\">");
document.writeln("</div>");
document.writeln("</div>");
lastScrollY=-100;
function heartBeat0()
{
var scrollPos; 
if (typeof window.pageYOffset != 'undefined') { 
   scrollPos = window.pageYOffset; 
} 
else if (typeof document.compatMode != 'undefined' && 
     document.compatMode != 'BackCompat') { 
   scrollPos = document.documentElement.scrollTop; 
} 
else if (typeof document.body != 'undefined') { 
   scrollPos = document.body.scrollTop; 
} 

diffY=scrollPos;
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.all.searchspe.style.pixelTop+=percent;
lastScrollY=lastScrollY+percent;
}
window.setInterval("heartBeat0()",1);
-->


