
				//获取页面元素对象
				//1.获取大盒子
				let oBigBox = $id('ImagingBigPic');
				//2. 获取top
				let oTop = $id('bigTop');
				//3. 获取左遮罩
				let oMarkLeft = $id('left');
				//4. 获取右遮罩
				let oMarkRight = $id('right');
				
				//5. 获取左按钮
				let oLtbtn = $id('btn_l');
				//6. 获取右按钮
				let oRtbtn = $id('btn_r');
				//7. 获取所有大图
				let oBigPic = oTop.getElementsByTagName('li');
				//8. 获取下部分
				let oBottom = $id('ImagingSmallPic');
				//9. 获取小图所在ul
				let oSmallUl = $id('bigBottom');
				//10. 获取所有小图
				let oSmallPic = oBottom.getElementsByTagName('li');
				
				//11. 设置小图ul的宽度(单张小图的宽 * 所有的小图的长度)
				oSmallUl.style.width = oSmallPic[0].offsetWidth * oSmallPic.length + 'px';
				
				//12. 给左遮罩与左按钮添加移入事件
				oLtbtn.onmouseenter = function(){
					sport(oLtbtn,{opacity : 100});
				}
				//13. 给左遮罩与左按钮添加移出事件
				oLtbtn.onmouseleave = function(){
					sport(oLtbtn,{opacity : 50});
				}
				//14. 给右遮罩与右按钮添加移入事件
				 oRtbtn.onmouseenter = function(){
					sport(oRtbtn,{opacity : 100});
				}
				//15. 给右遮罩与右按钮添加移出事件
				oRtbtn.onmouseleave = function(){
					sport(oRtbtn,{opacity : 50});
				}
				
				
				
				//16. 声明一个控制当前图片的下标 
				let indexA = 0;
				//17. 声明一个zIndex的变量
				let zIndex = 1;
				//17.1 声明一个timer变量
				let timer = null;
				slider();
				autoPlay()
				
				//18. 左按钮点击事件
				oLtbtn.onclick = function(){
					indexA --;
					if(indexA == -1){
						indexA = oBigPic.length - 1;
					}
					slider();
				}
				//19. 右按钮点击事件
				oRtbtn.onclick = function(){
					indexA ++;
					if(indexA == oBigPic.length){
						indexA = 0;
					}
					slider();
				}
				
				
				
				//20. 给所有小图添加事件
				for(var i = 0,len = oSmallPic.length;i < len ;i ++){
					//记录当前下标 
					oSmallPic[i].index = i;
					
					//移入事件
					
					oSmallPic[i].onmouseenter = function(){
						sport(this,{opacity : 100});
					}
					//移出事件
					oSmallPic[i].onmouseleave = function(){
						if(this.index != indexA){
							sport(this,{opacity : 50});
						}
					}
					//点击事件
					oSmallPic[i].onclick = function(){
						indexA = this.index;
						slider();
					}
				}
				
				//21. 设置图片轮播
				function slider(){
					//大图轮播
					oBigPic[indexA].style.zIndex = ++ zIndex;
					//小图轮播
					if(indexA === 0){
						sport(oSmallUl,{left : 0});
					}else if(indexA === oSmallPic.length - 1){
						sport(oSmallUl,{left : - (oSmallPic.length - 3) * oSmallPic[0].offsetWidth});
					}else{
						sport(oSmallUl,{left : - (indexA - 1) * oSmallPic[0].offsetWidth});
					}
					//初始化小图透明度
					//所有小图50
					for(let i = 0,len = oSmallPic.length;i < len;i ++){
						sport(oSmallPic[i],{opacity : 50});
					}
					//当前小图100
					sport(oSmallPic[indexA],{opacity : 100});
				}
				//22. 自动轮播
				function autoPlay(){
					timer = setInterval(function(){
						indexA ++;
						if(indexA == oBigPic.length){
							indexA = 0;
						}
						slider();
					},3000)
					
				}
				//23. 给大盒子添加移入移出事件
				oBigBox.onmouseenter = function(){
					clearInterval(timer);
				}
				oBigBox.onmouseleave = function(){
					autoPlay();
				}
			
			function $id(id){
				return document.getElementById(id);
			}
		