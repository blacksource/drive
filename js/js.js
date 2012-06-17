var thisHREF = document.location.href;
var tmpHPage = thisHREF.split( "com" );
var thisHPage = tmpHPage[ tmpHPage.length-1 ];
$(document).ready(function(){
$("#nav ul").find("li").each(function(){
	  if($(this).children('a').attr("href")!=undefined){
		if($(this).children('a').attr("href")==thisHPage)
		{
			$(this).children('a').addClass('ac');			
			}
			}
									  });

						   })

function gundong()
{
	var speed=12; //数字越大速度越慢
var taba=document.getElementById("demoa");
var tab1a=document.getElementById("demo1a");
var tab2a=document.getElementById("demo2a");
tab2a.innerHTML=tab1a.innerHTML;
function Marquee(){
if(tab2a.offsetWidth-taba.scrollLeft<=0)
taba.scrollLeft-=tab1a.offsetWidth
else{
taba.scrollLeft++;
}
}
var MyMar=setInterval(Marquee,speed);
taba.onmouseover=function() {clearInterval(MyMar)};
taba.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

	}