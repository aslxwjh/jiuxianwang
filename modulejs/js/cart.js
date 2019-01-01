$(function() {
				//取出在cookie中存的购物车信息
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";

				if(!cartStr) {
					$(".blank").css({
						display: "block"
					});
				} else {
					var cartObj = convertCartStrToObj(cartStr);
					//遍历所有的商品生成html添加到购物车列表中去
					for(var id in cartObj) {
						//商品信息对象
						var good = cartObj[id];
						var str = '<ul class="goodInfo" data-good-id="' + id + '">' +
							'<li><img src="' + good.src + '" /></li>' +
							'<li>' + good.name + '</li>' +
							'<li>' + good.price + '</li>' +
							'<li class="num">' +
							'<a href="javascript:;" class="minus">-</a>' +
							' <input type="text" value="' + good.num + '" />  ' +
							'<a href="javascript:;" class="plus">+</a>' +
							'</li>' +
							'<li class="total">' + good.num * good.price + '</li>' +
							'<li><a href="javascript:;" class="del">删除</a></li>' +
							'</ul>';
						//将上面的结构添加到cartList中去
						$(str).appendTo(".cartList");
					}
					//给每个商品添加从购物车删除的事件
					$('.goodInfo a.del').click(function() {
						//在页面上将商品信息删除，顺便获取一个该商品的id
						var id = $(this).parents('.goodInfo').remove().attr("data-good-id");
						//从cookie中将该商品删除
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);

						delete cartObj[id];
						//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
						/* {
					 * 	sp1 : {
					 * 		name : "香蕉",
						 * price : 30,
						 * num : 1,
						 * src : "img/1.jpg"
					 * },
					 * sp2 :{
						 * 	name :"苹果",
						 * price : 40,
						 * num:2,
						 * src : "img/2.jpg"
					 * },
					 * sp3{
						 * 	name : "梨"，
						 * price : 50,
						 * num : 3,
						 * src : "img/3.jpg"
					 * }
					 * }
					 */
						//将新商品信息放回cookie
						$.cookie('cart', convertObjToCartStr(cartObj), {
							expires: 7,
							path: "/"
						});
					})

					//给增加按钮添加事件
					$(".goodInfo a.plus").click(function() {

						var id = $(this).parents('.goodInfo').attr("data-good-id");

						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						cartObj[id].num += 1;
						//将页面上显示的数量加1
						$(this).siblings("input").val("" + cartObj[id].num);
						//更新页面上的小计
						$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
						//将信息放回cookie
						$.cookie('cart', convertObjToCartStr(cartObj), {
							expires: 7,
							path: "/"
						});
					});
					//给减按钮添加点击事件
					$(".goodInfo a.minus").click(function(){
						var id = $(this).parents('.goodInfo').attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						if(cartObj[id].num > 1){ //商品数量减少不能少于1
							cartObj[id].num -= 1;
							//将页面上显示的数量减1
							$(this).siblings("input").val("" + cartObj[id].num);
							//更新页面上的小计
							$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
							//将信息放回cookie
							$.cookie('cart', convertObjToCartStr(cartObj), {
								expires: 7,
								path: "/"
							});
						}
						
						
					});
					
					//改数量的input绑定一个blur事件
					$(".goodInfo li.num input").blur(function(){
						var id = $(this).parents('.goodInfo').attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						//判断用户输入是否合法
						var pattern = /^\d+$/;
						if(!pattern.test($(this).val())){
							cartObj[id].num = 1;
							$(this).val("1");
						}else{
							//修改一下数量
						cartObj[id].num = parseInt($(this).val());
						}
						
						
							$(this).siblings("input").val("" + cartObj[id].num);
							//更新页面上的小计
							$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
							//将信息放回cookie
							$.cookie('cart', convertObjToCartStr(cartObj), {
								expires: 7,
								path: "/"
							});
					})
					
			}

			});

			function convertCartStrToObj(cartStr) {
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr) {
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i++) {
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name: data[1],
						price: parseFloat(data[2]),
						num: parseInt(data[3]),
						src: data[4]
					}
				}
				return obj;
			}

			function convertObjToCartStr(obj) {
				/* {
				 * 	sp1 : {
				 * 		name : "香蕉",
				 * price : 30,
				 * num : 1,
				 * src : "img/1.jpg"
				 * },
				 * sp2 :{
				 * 	name :"苹果",
				 * price : 40,
				 * num:2,
				 * src : "img/2.jpg"
				 * },
				 * sp3{
				 * 	name : "梨"，
				 * price : 50,
				 * num : 3,
				 * src : "img/3.jpg"
				 * }
				 * }
				 */
				var cartStr = "";
				for(var id in obj) {
					if(cartStr) {
						cartStr += ":";
					}
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
				}
				return cartStr;
			}