var cookieStr = getCookie('loginUser') ? getCookie('loginUser') : '';
var oDiv = document.getElementById("box");
if(cookieStr){
	oDiv.innerHTML = '<p>欢迎你：' + cookieStr + ' <a href="javascript:;">注销</a>'
	var oA = oDiv.getElementsByTagName('a')[0];
	oA.onclick = function(){
		removeCookie('loginUser');
		oDiv.innerHTML = '<p><a href="login.html">你好，请登录</a> <a href="registor.html">免费注册</a>'
	}
}else{
	oDiv.innerHTML = '<p><a href="login.html">你好，请登录</a> <a href="registor.html">免费注册</a>'	
}
