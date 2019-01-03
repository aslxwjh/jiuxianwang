
var oMme = document.getElementById("hoverMme")
var oMe = document.getElementById("showMe")
var oMmea = document.getElementById('hoverMmea')




oMme.onmouseover = oMe.onmouseover = function(evt){
	var e = evt || window.event
	oMmea.style.background = 'skyblue'
	oMe.style.background = 'yellow'
	oMe.style.display = 'block'
	
}
oMme.onmouseout = oMe.onmouseout = function(evt){
	var e = evt || window.event
	oMe.style.display = 'none'
	oMmea.style.background = ''
	
}
