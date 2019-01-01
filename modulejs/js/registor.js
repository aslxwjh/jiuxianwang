window.onload = function(){
	var oUname = document.getElementById("uname");
	var oPwd = document.getElementById("pwd");
	var oReg = document.getElementById("registor");
	var oLog = document.getElementById("login");
	var oSpanUn = document.getElementById("un");
	var oSpanPwd = document.getElementById("pass");
	var arr = [false,false];
	oUname.onblur = function(evt){
		var uname = oUname.value;
		var re = /^[\u4e00-\u9fa5\w]{3,12}$/;
		if(!re.test(uname)){
			oSpanUn.innerHTML = '您的用户名不符合规范';
			oSpanUn.style.color = 'red';
			arr[0] = false;
		}else{
			oSpanUn.innerHTML = '中文、字母、数字、下划线的组合,3到12位';
			oSpanUn.style.color = 'red';
			arr[0] = true;
		}
	}
	oPwd.onblur = function(evt){
		var pwd = oPwd.value;
		var re = /^\w{6,12}$/;
		if(!re.test(pwd)){
			oSpanPwd.innerHTML = '您的密码不符合规则';
			oSpanPwd.style.color = 'red';
			arr[1] = false;
		}else{
			oSpanPwd.innerHTML = '字母、数字、下划线，6到12位';
			oSpanPwd.style.color = 'deepskyblue';
			arr[1] = true;
		}
	}
	oReg.onclick = function(){
		var uname = oUname.value;
		var pwd = oPwd.value;
		console.log(uname,pwd);
		if(!uname){
			alert('用户名不能为空！');
			return;
		}
		if(arr.indexOf(false) != -1){
			alert('请正确填写信息！');
			return;
		}
		
		var cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
		var cookieObj = convertCookieStrToObj(cookieStr);
		if(uname in cookieObj){
			alert('该用户名已存在！');
			return;
		}else{
			cookieObj[uname] = pwd;
			cookieStr = convertObjToCookieStr(cookieObj);
			createCookie('registorUser',cookieStr,7);
			alert('注册成功！');
		}
		alert(decodeURIComponent(document.cookie))
	}
	oLog.onclick = function(){
		location.href = 'login.html';
	}
	//将cookie字符串转为对象
	function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		
		var arr = str.split(','); 
		console.log(arr);
		var obj = {};
		for(var i = 0;i < arr.length;i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
	//将对象转为cookie字符串
	function convertObjToCookieStr(obj){
		var str = '';
		for(var i in obj){
			var pwd = obj[i];
			if(str){
				str += ',';
			}
			str += i + ':' + pwd;
		}
		return str;
	}
}