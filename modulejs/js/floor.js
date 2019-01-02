$("#LoutiNav ul li").not(".last").hover(function() {
				//鼠标滑上去
				$(this).addClass("hover");
			}, function() {
				//鼠标移开
				$(this).removeClass("hover");
			});
			 //鼠标点击
			var mark = 1;
			$("#LoutiNav ul li").not(".last").click(function() {
				mark = 2; //改变标记
				$("#LoutiNav ul li").find("span").removeClass("active");
				$(this).find("span").addClass("active");
				//点击左边导航 然后跳到指定的楼层
				var $index = $(this).index(); //找到了对应的序列号
				//alert($index);
				var $top = $("#main .Louti").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
				//alert($top);
				$("body,html").animate({
					scrollTop: $top
				}, 500, function() {
					mark = 1;
				}); //浏览器滚动的高度
			});
			 //浏览器窗口滚动事件
			$(window).scroll(function() {
				if (mark == 1) {
					var $t = $(this).scrollTop(); //获取滚动条滚动的高度
					//document.title = $t;
					if ($t > 1000) { //通过滚动条来判断
						$("#LoutiNav").fadeIn(); //淡入 导航慢慢显示出来
					} else {
						$("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
					}
					var $obj = $("#main .Louti");
					//循环每一个Louti 然后找到最先满足条件的那个 Louti
					$obj.each(function() {
						var $index = $(this).index();
						//楼层与浏览器上面的高度
						var $height = $obj.eq($index).offset().top + $(this).height() / 2;
						//alert($height) 
						//document.title = $t + "--" + $height;
						if ($t < $height) {
							$("#LoutiNav ul li").find("span").removeClass("active")
							$("#LoutiNav ul li").eq($index).find("span").addClass("active");
							return false;
						}
					});
				}
			});
			 //点击 Top按钮 跳转到浏览器顶部
			$("#LoutiNav ul li.last").click(function() {
				$("body,html").animate({
					scrollTop: 0
				}, 0, function() {
					mark = 1;
				});
			});