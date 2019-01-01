var oUname = document.getElementById("uname");
var oPwd = document.getElementById("pwd");
var oLog = document.getElementById("login");
var oReg = document.getElementById("registor");
oLog.onclick = function(){
	var uname = oUname.value;
	var pwd = oPwd.value;
	var cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
	var obj = convertCookieStrToObj(cookieStr);
	if(obj[uname] == pwd){
		alert('登录成功！');
		location.href = 'index.html';
		createCookie('loginUser',uname,7);
		
	}else{
		alert('用户名与密码不符！');
	}
}
oReg.onclick = function(){
	location.href = 'registor.html';
}
function convertCookieStrToObj(str){
	if(!str){
		return {};
	}
	var obj = {};
	var arr = str.split(',');
	for(var i = 0,len = arr.length;i < len ;i ++){
		var list = arr[i].split(':');
		obj[list[0]] = list[1];
	}
	return obj;
}