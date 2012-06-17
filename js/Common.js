// JavaScript Document
//广告切换显示
function ShowInfoList(Piclist,Urllist,Textlist,Width,Height,textHieght)
{
var focus_width=parseInt(Width); //flash宽度定义
var focus_height=parseInt(Height); //flash高度定义
var text_height=parseInt(textHieght); //文字的高
var swf_height = focus_height+text_height;
var pics=Piclist.substring(0,Piclist.length-1)+Piclist.substring(Piclist.length-1,Piclist.length).replace("|","");
var links=Urllist.substring(0,Urllist.length-1)+Urllist.substring(Urllist.length-1,Piclist.length).replace("|","");
    Textlist=Textlist.replace(/<.*?>/g,"");
var texts=Textlist.substring(0,Textlist.length-1)+Textlist.substring(Textlist.length-1,Piclist.length).replace("|","");
//var pics=Piclist;
//var links=Urllist;
//var texts=Textlist;
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ focus_width +'" height="'+ swf_height +'">');
document.write('<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="/Style/pixviewer.swf"><param name="quality" value="high"><param name="bgcolor" value="#DADADA">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+(focus_width+2)+'&borderheight='+(focus_height+2)+'&textheight='+text_height+'">');
document.write('<embed src="/Style/pixviewer.swf" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'" menu="false" bgcolor="#DADADA" quality="high" width="'+ focus_width +'" height="'+ swf_height +'" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
document.write('</object>');
} 
//单个FLash或图片
function ShowInfo(filepath,w,h,str) {
if(filepath.substring(filepath.length-3,filepath.length)=="swf"){
    document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'"> ');
    document.write('<param name="movie" value="' + filepath + '">');
    document.write('<param name="quality" value="high"> ');
    document.write('<param name="wmode" value="transparent"> ');
    document.write('<param name="menu" value="false"> ');
    document.write('<embed src="' + filepath + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed> ');
    document.write('</object> ');
}else if(filepath.substring(filepath.length-3,filepath.length)=="mp3"||filepath.substring(filepath.length-3,filepath.length)=="avi"){
	document.write('<embed id="MediaPlayer963" src="'+filepath+'" width="100%" height="30" type="video/x-msvideo" volume="1" autostart="0" loop="1" align="left"></embed>');
}
else{
	document.write('<img src="'+filepath+'" width="'+w+'" height="'+h+'" alt="'+str+'" border="0" />');
}
}
function DrawImage(ImgD,w){ 
 var image=new Image(); 
 image.src=ImgD.src; 
 if(image.width>0 && image.height>0){ 
  flag=true; 
  if(image.width/image.height>= w/w){ 
   if(image.width>w){
    ImgD.width=w; 
    ImgD.height=(image.height*w)/image.width; 
   }else{ 
    ImgD.width=image.width;
    ImgD.height=image.height; 
   } 
   //ImgD.alt=t; 
  } 
  else{ 
   if(image.height>w){
    ImgD.height=w; 
    ImgD.width=(image.width*w)/image.height; 
   }else{ 
    ImgD.width=image.width;
    ImgD.height=image.height; 
   } 
   //ImgD.alt=t; 
  } 
 }
}