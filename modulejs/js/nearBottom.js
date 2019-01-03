    var oD2 = document.getElementById("nearBottom")
    var cLose = document.getElementById('miniClose')
    var cLosed = document.getElementById('closed')
	//返回顶部
	
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= 600){
			oD2.style.position = "fixed"
			oD2.style.top= 400 + "px"
			oD2.style.left= -350 + "px"			
			oD2.style.display = "block"
			zIndex = 100000
		}else{
			oD2.style.display = "none"
		}
		
	cLose.onclick = function(){
		
		cLosed.style.display = 'none'
	}
		
		
		
		
	}
	