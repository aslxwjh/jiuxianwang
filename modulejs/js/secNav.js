
	var $secNav = $('#secNav');
	var $secNavsec = $('#secNavsec');
	var $selector = $('#secNav ul li');
	
	$selector.mouseover(function(){
		$secNavsec.css('display','block');
		$('#secNavsec div').css('display','none').eq($(this).index()).css('display','block');
		
	});
		
//	$secNav.mouseout(function(){
//		$secNavsec.css('display','none');
//	})
	$('#secNavsec div').mouseout(function(){
		$secNavsec.css('display','none');
		
	});
	
//		$(value).mouseover(function(){
//			$secNavsec.css("display","block");
//		})
//		$(value).mouseout(function(){
//			$secNavsec.css("display","none");
//		})
//	})
//	$selector[0].mouseover(function(){
//		$(this).css("display", "block");
//	});
//	$selector[0].mouseover(function(){
//		$secNavsec.css("display","block");
//	});
//	$selector[0].mouseout(function(){
//		$(this).css("display", "none");		
//	});
//	$selector[0].mouseout(function(){
//		$secNavsec.css("display","none");
//	});
	



