var bdShare=bdShare||{};(function(){var n1=new Date().getTime();var n2=new Date().getTime();var n3=new Date().getTime();var W=window,D=document,B=D.body,E=D.documentElement,U=encodeURIComponent(D.location.href),T=encodeURIComponent(D.title),params=[],iframe="",custom={},s=D.getElementById("bdshare_js").attributes["data"],ie6=/MSIE 6.0/.test(navigator.userAgent),bt=D.compatMode!="CSS1Compat";s=s.nodeValue.replace(/&amp;/g,"&").split("&")||"";for(var i=s.length;i--;){var j=s[i].split("=");params[j[0]]=j[1]}var k={bdPref:"bds_",bdNums:params["mini"]?7:15,bdMini:params["mini"]||false,bdType:params["type"]||"",bdLeft:params["pos"]||"right",bdTitle:"\u5206\u4eab\u5230",bdText:T,bdMore:"\u66f4\u591a...",bdPopTitle:"\u5206\u4eab\u5230",bdImg:params["img"]||0,bdImgW:24,bdTop:0,bdIds:"bdshare",bdIdsl:params["mini"]?"bdshare_m":"bdshare_l",bdUid:params["uid"]||"",bdPic:"",searchPic:params["searchPic"]||0,bdComment:"",bdDesc:"",wbUid:"",tongji:"on",review:"on",render:true,snsKey:{},bdHost:"http://bdimg.share.baidu.com/static/",bdJump:"http://share.baidu.com/",bdStatistics:"http://share.baidu.com/commit",bdCommit:"http://s.share.baidu.com/",bdCout:"http://nsclick.baidu.com/v.gif?pid=307",bdWList:"([http|https]://[a-zA-Z0-9_.]+.baidu.com)",bdList:["qzone,QQ\u7a7a\u95f4,qqkj","tsina,\u65b0\u6d6a\u5fae\u535a,xlwb","baidu,\u767e\u5ea6\u641c\u85cf,bdsc","renren,\u4eba\u4eba\u7f51,rrw","tqq,\u817e\u8baf\u5fae\u535a,txwb","kaixin001,\u5f00\u5fc3\u7f51,kxw","tqf,\u817e\u8baf\u670b\u53cb,txpy","hi,\u767e\u5ea6\u7a7a\u95f4,bdkj","douban,\u8c46\u74e3\u7f51,db","tsohu,\u641c\u72d0\u5fae\u535a,shwb","msn,MSN,msn","qq,QQ\u6536\u85cf,qqsc","taobao,\u6211\u7684\u6dd8\u5b9d,tjh","tieba,\u767e\u5ea6\u8d34\u5427,bdtb","sohu,\u641c\u72d0\u767d\u793e\u4f1a,shbsh","t163,\u7f51\u6613\u5fae\u535a,wywb","qy,\u5947\u827a\u5947\u8c08,qyqt","tfh,\u51e4\u51f0\u5fae\u535a,fhwb","hx,\u548c\u8baf,hexun","fx,\u98de\u4fe1,feixin","tuita,\u63A8\u4ED6,tuita","ifeng,\u51E4\u51F0\u5FEB\u535A,ifeng","ff,\u996d\u5426,fanfou","xg,\u9c9c\u679c,xianguo","ty,\u5929\u6daf\u793e\u533a,tianya","fbook,Facebook,facebook","twi,Twitter,twitter","ms,Myspace,myspace","deli,delicious,delicious","s51,51\u6E38\u620F\u793e\u533a,51shequ","s139,139\u8bf4\u5ba2,shuoke","linkedin,linkedin,LinkedIn","copy,\u590d\u5236\u7f51\u5740,kaobei"]}||{},base={_createScriptTag:function(a,b,c){a.setAttribute("type","text/javascript");c&&a.setAttribute("charset",c);a.setAttribute("src",b);document.getElementsByTagName("head")[0].appendChild(a)},_removeScriptTag:function(a){if(a.clearAttributes){a.clearAttributes()}else{for(var b in a){if(a.hasOwnProperty(b)){delete a[b]}}}if(a&&a.parentNode){a.parentNode.removeChild(a)}a=null},callByBrowser:function(b,c,d){var e=document.createElement("SCRIPT"),scriptLoaded=0,options=d||{},charset=options["charset"],callback=c||function(){},timeOut=options["timeOut"]||0,timer;e.onload=e.onreadystatechange=function(){if(scriptLoaded){return}var a=e.readyState;if("undefined"==typeof a||a=="loaded"||a=="complete"){scriptLoaded=1;try{callback();clearTimeout(timer)}finally{e.onload=e.onreadystatechange=null;base._removeScriptTag(e)}}};if(timeOut){timer=setTimeout(function(){e.onload=e.onreadystatechange=null;base._removeScriptTag(e);options.onfailure&&options.onfailure()},timeOut)}base._createScriptTag(e,b,charset)},"on":function(ele,type,func){if(ele.addEventListener){ele.addEventListener(type,func,false)}else{if(ele.attachEvent){ele.attachEvent("on"+type,func)}}},html:function(a,b){var c=D.createElement(b||"div");for(var p in a){p=="style"?c[p].cssText=a[p]:c[p]=a[p]}if(b=="link"){D.getElementsByTagName("head")[0].appendChild(c)}else{return B.insertBefore(c,(b=="iframe"?B.firstChild:iframe.nextSibling))}},list:function(s){var o=k.bdPref,m=s.split(","),n=m[1],u="#",c=o+m[0]+" "+m[2];return{name:n,url:u,cls:c}},list_s:function(s){var a=[],h=inner="",conf=k,leng=conf.bdList,n=conf.bdNums,more=(conf.bdNums<leng.length)?'<li><a href="#" class="bds_more">'+conf.bdMore+"</a></li>":"";while(n--){h=base.list(leng[n]),a.push('<a href="'+h.url+'" class="'+h.cls+'">'+h.name+"</a>")}inner='<iframe id="bdsIfr" style="position:absolute;display:none;z-index:9999;" frameborder="0"></iframe>';inner+='<div id="'+conf.bdIdsl+'"><div id="'+conf.bdIdsl+'_c"><h6>'+conf.bdTitle+"</h6>";inner+="<ul><li>"+a.reverse().join("</li><li>")+"</li>"+more+'</ul><p><a href="#" class="goWebsite">\u767e\u5ea6\u5206\u4eab</a></p></div></div>';if(s){base.html({id:"bdshare_s",innerHTML:inner})}else{return inner}},scroll:function(b,c){base.on(W,"scroll",function(e){var a=base.getSize(),conf=k,top=conf.bdTop;if(conf.bdType=="slide"){if(ie6||bt){base.setAttr(D.getElementById(conf.bdIdsl),"display:block");_bdS.style.top=(a.t+(top==0?(a.h/2-(D.getElementById(conf.bdIdsl).offsetHeight-11)/2):parseInt(top)))+"px"}else{if(conf.bdTop!=0){_bdS.style.top=parseInt(conf.bdTop)+"px"}}}if(c=="pop"&&(ie6||bt)){b.style.top=(a.t+a.h/2-b.offsetHeight/2)+"px";base.setAttr(iframe,"top:"+b.style.top)}})},getSize:function(){return{t:(B.scrollTop||E.scrollTop),l:(B.scrollLeft||E.scrollLeft),w:(E.clientWidth||B.clientWidth),h:(W.innerHeight||E.clientHeight||B.clientHeight)}},getPosition:function(a){var s=base.getSize(),o=a,pos={t:0,l:0},gecko=/gecko/.test(navigator.userAgent),posAdd=function(t,l){pos.t+=t,pos.l+=l};if(o&&o!=B){if(o.getBoundingClientRect){var b=o.getBoundingClientRect();if(b.top==b.bottom){var g=o.style.display;o.style.display="block";o.style.display=g}posAdd(b.top+s.t-E.clientTop,b.left+s.l-B.clientLeft)}else{var c=D.defaultView;while(o){posAdd(o.offsetTop,o.offsetLeft);var e=c.getComputedStyle(o,null);if(gecko){var f=parseInt(e.getPropertyValue("border-left-width"),10)||0,bs=parseInt(e.getPropertyValue("border-top-width"),10)||0;posAdd(bs,f);if(o!=a&&e.getPropertyValue("overflow")!="visible"){posAdd(bs,f)}}o=o.offsetParent}o=a.parentNode;while(o&&o!=B){posAdd(-o.scrollTop,-o.scrollLeft);o=o.parentNode}}}return pos},setAttr:function(a,b){var s=b.split(";"),sl=s.length;while(sl--){if(s[sl]){var p=s[sl].split(":");if(p){a.style[p[0]]=p[1]}}}},children:function(ele){for(var children=[],tmpEl=ele.firstChild;tmpEl;tmpEl=tmpEl.nextSibling){if(tmpEl.nodeType==1){children.push(tmpEl)}}return children},"generateRandom":function(str,n){var m=str.length;var s="";for(var i=1;i<=n;i++){var r=Math.floor(m*Math.random());s=s+str.charAt(r)}return s},"generateLinkid":function(){var time=(+new Date).toString(36);var random=base.generateRandom("0123456789abcdefghijklmnopqrstuvwxyz",3);return time+random}},ifr=function(a){base.html({href:k.bdHost+"css/bdsstyle.css?cdnversion=20120516",rel:"stylesheet",type:"text/css"},"link");iframe=iframe||base.html({style:"display:none;"+(a||""),frameBorder:0},"iframe")},loader=function(type,to,title,url){var b=/(\d+\-[a-zA-Z\d]+\-\d+\-\d+\-[a-f\d]+)/ig,sign=D.location.href.match(b)||"",re=new RegExp(k.bdWList,"ig");if(re.test(D.location.href)&&sign==""&&typeof type=="undefined"){return}if(k.tongji=="on"||sign!=""||typeof type!="undefined"){if(sign!=""){sign=sign.toString()}(new Image()).src=k.bdCout+"&type="+(type||3071)+"&sign="+sign+"&uid="+k.bdUid+"&desturl="+encodeURIComponent(D.referrer)+"&linkid="+linkid}},dialog={create:function(){var b=k,s=b.bdList,sl=s.length,list=[],h="",size=base.getSize(),o=D.getElementById(b.bdIds+"_pop"),pos=((ie6||bt)?"absolute":"fixed"),t=((ie6||bt)?size.t:0);if(!o){while(sl--){h=base.list(s[sl]),list.push('<a href="'+h.url+'" class="'+h.cls+'">'+h.name+"</a>")}var c=base.html({id:b.bdIds+"_pop",style:"position:"+pos,innerHTML:"<div><h5></h5><ul><li>"+list.reverse().join("</li><li>")+'</li></ul><p><a href="#" class="goWebsite">\u767e\u5ea6\u5206\u4eab</a></p></div>'});event.bind(c,"mouseover","a");event.bind(c,"click","b",function(){c.style.display="none";iframe.style.display="none"})}var d=c||o;d.getElementsByTagName("h5")[0].innerHTML=(custom.title||b.bdPopTitle)+"<b>&nbsp;</b>";base.setAttr(d,"display:block;");base.setAttr(d,"left:"+(size.w/2-d.offsetWidth/2)+"px;top:"+(t+size.h/2-d.offsetHeight/2)+"px");base.setAttr(iframe,"position:"+pos+";display:block;z-index:10000;width:"+d.offsetWidth+"px;height:"+d.offsetHeight+"px;left:"+d.style.left+";top:"+d.style.top);base.scroll(d,"pop");base.on(W,"resize",function(e){var a=base.getSize(),post="left:"+(a.w/2-d.offsetWidth/2)+"px;top:"+(t+a.h/2-d.offsetHeight/2)+"px";base.setAttr(d,post);base.setAttr(iframe,post)})}},event={bind:function(a,b,c,d){var f=this;a.addEventListener?a.addEventListener(b,function(e){return f._action(e,e.target,c,a,d)},false):a.attachEvent("on"+b,function(e){e=W.event;return f._action(e,e.srcElement,c,a,d)})},_action:function(e,b,d,f,g){if(b.nodeName==d.toUpperCase()){if(d=="a"||d=="span"){var c=b.className,t=c=="goWebsite"?c:c.split(" ")[0].split("_")[1],me=this;if(t){(t=="more"&&d=="span")?me._tools():b.onclick=function(i,a){return function(){if(i=="more"){me._tools()}else{if(i=="copy"){me._copy(me)}else{me._jump(i,a)}}return false}}(t,f)}return false}if(typeof g==="function"){g()}}if(typeof e.preventDefault==="function"){e.preventDefault();e.stopPropagation()}else{e.returnValue=false;e.cancelBubble=true}},_tools:function(){loader(3072);dialog.create()},_copy:function(a){_this=a;var b=new _this._browsers();if(b.name=="IE"){window.clipboardData.setData("text",document.title+" "+D.location.href);alert("\u6807\u9898\u548c\u94fe\u63a5\u590d\u5236\u6210\u529f\uff0c\u60a8\u53ef\u4ee5\u63a8\u8350\u7ed9QQ/MSN\u4e0a\u7684\u597d\u53cb\u4e86\uff01")}else{window.prompt("\u60a8\u4f7f\u7528\u7684\u662f\u975eIE\u6838\u5fc3\u6d4f\u89c8\u5668\uff0c\u8bf7\u6309\u4e0b Ctrl+C \u590d\u5236\u4ee3\u7801\u5230\u526a\u8d34\u677f",document.title+" "+D.location.href)}},_jump:function(a,b){var c=k,pic=c.bdPic,txt=c.bdText,wbuid=c.wbUid,urls=U,desc=c.bdDesc,comment=c.bdComment,miniWindow=c.bdMiniWindow||0;custom=(b.getAttribute("data")&&b.getAttribute("data")!="")?eval("("+b.getAttribute("data")+")"):custom;var randomCommit=Math.round(Math.random());if(custom!=""){pic=encodeURIComponent(custom.pic||"")||pic;txt=encodeURIComponent((custom.text||"").substr(0,300))||txt;urls=encodeURIComponent(custom.url||"")||urls;comment=encodeURIComponent(custom.comment||"")||comment;desc=encodeURIComponent(custom.desc||"")||desc;wbuid=custom.wbuid||wbuid}n3=new Date().getTime()+3000;var l=n1.toString(32)+n2.toString(32)+n3.toString(32);var urlParams="?click=1&url="+urls+"&uid="+c.bdUid+"&to="+a+"&type=text&relateUid="+wbuid+"&pic="+pic+"&title="+txt+"&key="+(c.snsKey[a]||"")+"&sign="+c.review+"&desc="+desc+"&comment="+comment+"&searchPic="+c.searchPic+"&l="+l+"&linkid="+linkid;if(1==randomCommit){var d=c.bdCommit+urlParams;var bdStatistics=c.bdCommit+"commit"+urlParams+"&t="+Math.random()}else{var d=c.bdJump+"s"+urlParams;var bdStatistics=c.bdStatistics+urlParams+"&t="+Math.random()}if(a!="goWebsite"){bdShare.fn._getSc("share");var sendRequest=function(){var list=[];return function(src){var index=list.push(new Image)-1;list[index].onload=function(){list[index]=list[index].onload=null};list[index].src=src}}();setTimeout(function(){sendRequest(bdStatistics)},1500);if(1==miniWindow){W.open(d,"bdShare","height=400, width=600")}else{W.open(d)}}else{W.open(c.bdJump)}},_browsers:function(){var a={};var b=navigator.userAgent.toLowerCase();var c,s;if(b.match(/msie ([\d.]+)/)){s=b.match(/msie ([\d.]+)/);a.name="IE";a.version=s[1]}else{if(b.match(/firefox\/([\d.]+)/)){s=b.match(/firefox\/([\d.]+)/);a.name="firefox";a.version=s[1]}else{if(b.match(/chrome\/([\d.]+)/)){s=b.match(/chrome\/([\d.]+)/);a.name="chrome";a.version=s[1]}else{if(b.match(/opera.([\d.]+)/)){s=b.match(/opera.([\d.]+)/);a.name="opera";a.version=s[1]}else{if(b.match(/safari.([\d.]+)/)){s=b.match(/safari.([\d.]+)/);a.name="safari";a.version=s[1]}else{a.name="\u672a\u77e5\u7684\u6d4f\u89c8\u5668";a.version="\u672a\u77e5\u7684\u7248\u672c\u53f7"}}}}}return a}};var linkid=base.generateLinkid();bdShare.fn=(function(){return{init:function(){n2=new Date().getTime()+1000;this.b=[];this.t=[];this.s=[];this.type="load";this._getShare();if(typeof bds_config!="undefined"){for(var p in bds_config){if(p=="bdPopTitle"||p=="bdText"||p=="bdPic"||p=="wbUid"||p=="tongji"||p=="render"||p=="snsKey"||p=="review"||p=="bdComment"||p=="bdDesc"||p=="bdTop"||p=="searchPic"||p=="bdUrl"||p=="bdMiniWindow"){if(p=="bdText"){k[p]=encodeURIComponent(bds_config[p].substr(0,300))}else{k[p]=(p=="render"||p=="snsKey"||p=="bdPopTitle")?bds_config[p]:encodeURIComponent(bds_config[p])}}}}this.conf=k;this.imgW=k.bdImgW;if(this.conf.render){if(this.b.length>0||this.t.length>0){this._share()}if(this.conf.bdType=="slide"){this._slide()}}this._getSc(this.type);loader();var buttonTypeArr=[];if(this.b.length>0){buttonTypeArr.push("button")}if(this.t.length>0){buttonTypeArr.push("tools")}if(this.conf.bdType){buttonTypeArr.push(this.conf.bdType)}var buttonType=(function(){for(var i=0,len=buttonTypeArr.length,obj={},a=[];i<len;i++){!(buttonTypeArr[i] in obj)&&a.push(buttonTypeArr[i])&&(obj[buttonTypeArr[i]]="")}return a.join(",")})();var loadTime=bdShare.loadTime?(+new Date-bdShare.loadTime):"";(new Image()).src=k.bdCout+"&type=3078&button="+buttonType+"&url="+U+"&loadTime="+loadTime},_getSc:function(t){this.type=t;var c=D.querySelectorAll?D.querySelectorAll(".shareCount"):D.getElementsByTagName("*"),cl=c.length;while(cl--){if(/\sshareCount|shareCount\s|shareCount$/.test(c[cl].className)){this.s.push(c[cl])}}if(this.s.length>0){base.callByBrowser(this.conf.bdJump+"getnum?url="+U+"&callback=bdShare.fn._getShare&type="+t+"&t="+new Date().getTime())}},_getShare:function(v){var a=v?true:false,c=[];if(D.querySelectorAll){this.b=D.querySelectorAll(".bdshare_b");this.t=D.querySelectorAll(".bdshare_t")}else{var e=D.getElementsByTagName("*"),l=e.length;while(l--){var s=e[l];if(/\sbdshare_t|bdshare_t\s/.test(s.className)){this.t.push(s)}if(/\sbdshare_b|bdshare_b\s|bdshare_b$/.test(s.className)){this.b.push(s)}}}if(a){var c=this.s,cl=c.length,count;while(cl--){if(/\sshareCount|shareCount\s|shareCount$/.test(c[cl].className)){count=this.type=="share"?(v.num[0]<10000?parseInt(c[cl].innerHTML)+1:v.num[1]):(v.errno*1==0?v.num[1]:0);c[cl].innerHTML=decodeURI(count);c[cl].setAttribute("title","\u7d2f\u8ba1\u5206\u4eab"+v.num[0]+"\u6b21");c[cl].onclick=function(){dialog.create()}}}this.s=[]}},_share:function(){base.list_s(true);var b=this.b,t=this.t,bl=b.length,tl=t.length,p=D.getElementById(this.conf.bdIdsl),m=D.getElementById("bdsIfr"),w=this.conf.bdList,wl=w.length;base.setAttr(p,"display:none;");event.bind(p,"mouseover","a");if(bl>0){while(bl--){if(b[bl].id=="bdshare"){event.bind(b[bl],"click","img",function(){dialog.create()});event.bind(b[bl],"mouseover","a",function(){dialog.create()});this._s(b[bl],p,m,b[bl],"b")}}}if(tl>0){while(tl--){if(t[tl].id=="bdshare"){event.bind(t[tl],"click","span",function(){dialog.create()});event.bind(t[tl],"mouseover","a");var a=base.children(t[tl]),sl=a.length,s="";while(sl--){var c=a[sl];if(/bds_more/.test(c.className)){s=a[sl];if(bt){s.style.height=(/bds_tools_32/.test(t[tl].className)?38:17)+"px"}this._s((s==""?t[tl]:s),p,m,t[tl],s)}else{for(var l=0;l<wl;l++){if(w[l]){var d=w[l].split(","),re=new RegExp(this.conf.bdPref+d[0],"ig");if(w[l]){var d=w[l].split(","),re=new RegExp(this.conf.bdPref+d[0],"ig");if(re.test(c.className)){if(d[1]=="拷贝"){c.title="复制网址"}else{c.title="\u5206\u4eab\u5230"+d[1]}}}}}}}}}}},_s:function(a,p,m,b,s){var c=this,pos=[],t,v=(s==""?"none":"block");this._popShow(a,{over:function(e){pos=base.getPosition(a);custom=(b.getAttribute("data")&&b.getAttribute("data")!="")?eval("("+b.getAttribute("data")+")"):"";base.setAttr(p,"display:"+v);base.setAttr(p,"left:"+(((base.getSize().w-e.clientX)<p.offsetWidth)?(pos.l-p.offsetWidth+a.offsetWidth):pos.l)+"px");base.setAttr(p,"top:"+(((base.getSize().h-e.clientY)<p.offsetHeight)?(pos.t-p.offsetHeight):pos.t+a.offsetHeight)+"px");base.setAttr(m,"display:"+v+";width:"+p.offsetWidth+"px;height:"+p.offsetHeight+"px;left:"+p.style.left+";top:"+p.style.top)},out:function(e){t=setTimeout(function(){p.style.display="none";m.style.display="none"},100);c._popShow(p,{over:function(){clearTimeout(t);p.style.display="block";m.style.display="block"},out:function(){p.style.display="none";m.style.display="none"}})}})},_slide:function(){if(!W._bdS){var a=this.conf.bdLeft=="right"?"left":"right",img=this.conf.bdHost+"images/"+this.conf.bdLeft.substring(0,1)+this.conf.bdImg+".gif";W._bdS=base.html({id:this.conf.bdIds,innerHTML:'<img src="'+img+'" alt="" style="float:'+a+';margin-top:58px;"/>'+base.list_s(false)})}var b=this,o=_bdS,size=base.getSize(),t=D.getElementById(this.conf.bdIdsl),m=D.getElementById("bdsIfr"),fixed=(!ie6&&!bt)?"fixed":"absolute",top=(ie6?size.t:0)+(this.conf.bdTop==0?(size.h<t.offsetHeight?-40:(size.h/2-t.offsetHeight/2)):parseInt(this.conf.bdTop));base.setAttr(o,"overflow:hidden;height:330px;position:"+fixed+";top:"+top+"px;"+this.conf.bdLeft+":0;"+((a=="right")?a+":"+(size.w-this.imgW)+"px":""));base.setAttr(t,a+":"+this.imgW+"px;display:none");event.bind(o,"click","img",function(){loader(3072);dialog.create()});event.bind(o,"mouseover","img",sl);event.bind(t,"mouseover","a");function sl(){base.setAttr(t,"display:block;");if((t.offsetWidth+b.imgW)==o.offsetWidth){return}tm=setTimeout(function(){if((t.offsetWidth+b.imgW)!=o.offsetWidth){b._move(o,0,b.imgW,t.offsetWidth,m)}},100);b._popShow(t,{over:function(){base.setAttr(m,"height:"+t.offsetHeight+"px;"+b.conf.bdLeft+":0;top:0;display:block")},out:function(){}});b._popShow(o,{over:function(){},out:function(){if(o.offsetWidth==(t.offsetWidth+b.imgW)){clearTimeout(tm);b._move(o,0,t.offsetWidth+b.imgW,-t.offsetWidth,m)}m.style.display="none"}})}base.scroll(o,"slide");base.on(W,"resize",function(){base.setAttr(o,((a=="right")?a+":"+(base.getSize().w-b.imgW)+"px":""))})},_move:function(o,t,b,c,m){var a=o.style,objm=m.style,me=this,d=6;setInterval(function(){if(t<d){t++;a.width=Math.ceil(c*t/d+b)+"px";objm.width=Math.ceil(c*t/d+b)-me.imgW+"px"}else{return}},10)},_popShow:function(o,a){if(D.all){o.onmouseenter=function(e){over(W.event)};o.onmouseleave=out}else{o.onmouseover=function(e){e.relatedTarget==null?over(e):(!(this===e.relatedTarget||this.compareDocumentPosition(e.relatedTarget)==20)&&over(e))};o.onmouseout=function(e){e.relatedTarget==null?out(e):(!(this===e.relatedTarget||this.compareDocumentPosition(e.relatedTarget)==20)&&out(e))}}function over(e){a.over(e)}function out(e){a.out(e)}}}})();ifr();bdShare.fn.init();var hname=document.location.hostname;if("image.baidu.com"==hname||"zhidao.baidu.com"==hname){var bdutIframe=document.createElement("iframe");bdutIframe.style.cssText="position:absolute;left:-9999px;width:0px;height:0px;border:0;";bdutIframe.src=k.bdHost+"js/ls.html?from="+hname+"&cdnversion=20120510";document.body.insertBefore(bdutIframe,document.body.childNodes[0])}var getCookie=function(key){var reg=new RegExp("(^| )"+key+"=([^;]*)(;|\x24)");var result=reg.exec(document.cookie);var value="";if(result){value=result[2]||""}return value};var setCookie=function(name,value,expires,path,domain,secure){var expireDate=new Date();var EXPIR_MONTH=30*24*3600*1000;if(expires){expireDate.setTime(expireDate.getTime()+expires*EXPIR_MONTH)}else{expireDate.setTime(expireDate.getTime()+EXPIR_MONTH)}document.cookie=name+"="+encodeURIComponent(value)+"; expires="+expireDate.toGMTString()+((path)?"; path="+path:"; path=/")+((domain)?"; domain="+domain:"")+((secure)?"; secure":"")};function fixCookie(){var bduss=getCookie("BDUSS");if(bduss){var beforeBduss=bduss;var afterBduss="";while(bduss.indexOf("%")>-1){bduss=decodeURIComponent(bduss)}afterBduss=bduss;setCookie("BDUSS",bduss,240,"",".baidu.com");if(beforeBduss.indexOf("%")>-1){(new Image()).src=k.bdCout+"&type=1023&beforeBduss="+beforeBduss+"&afterBduss="+afterBduss}}}fixCookie()})();