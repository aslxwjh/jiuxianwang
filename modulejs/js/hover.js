$(function() {
				var $uli = $(".particularLeft-top ul li");
				var $oli = $(".particularLeft-body div");
				$oli.addClass("hide");
				$oli[0].className = "show";
				$uli.addClass("normal");
				$uli[0].className = "hover";
				
				
				$uli.mouseover(function() {
				//	$(this).attr({background:"red"});
					var index = $(this).index();
					$uli.removeClass().addClass("normal");
					$(this).removeClass().addClass("hover");
					$oli.removeClass().addClass("hide");
					$oli.eq(index).removeClass().addClass("show");
				});
				
			})