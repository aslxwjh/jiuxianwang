// 一. 获取
				//1.获取大盒子
				let oBigBoxEnlarge = document.getElementById("ImagingBigPic");
				//2. 获取小图盒子
				let oSmallPicEnlarge = document.querySelector('#bigTop');
				//3. 获取遮罩
				let oMark = document.querySelector('.mark');
				//4. 获取滑块
				let oFloat = document.querySelector('.float_layer');
				//5. 获取大图盒子
				let oBigPicEnlarge = document.querySelector('big_pic');
				//6. 获取大图
				let oBigImg = document.querySelector('.big_pic img');
				//二. 事件
				//7. 给遮罩添加移入事件(滑块和大图盒子显示)
				oMark.onmouseenter = function(){
					oFloat.style.display = 'block';
					oBigPicEnlarge.style.display = 'block';
				}
				//8. 给遮罩添加移出事件(滑块和大图盒子隐藏)
				oMark.onmouseleave = function(){
					oFloat.style.display = 'none';
					oBigPicEnlarge.style.display = 'none';
				}
				//9. 给遮罩添加移动事件(鼠标跟随)
				oMark.onmousemove = function(evt){
					let e = evt || window.event;
					let left = e.pageX - oBigBoxEnlarge.offsetLeft - oSmallPicEnlarge.offsetLeft - oFloat.offsetWidth / 2;
					let top = e.pageY - oBigBoxEnlarge.offsetTop - oSmallPicEnlarge.offsetTop - oFloat.offsetHeight / 2;
					//边界
					if(left <= 0){
						left = 0;
					}else if(left >= oMark.offsetWidth - oFloat.offsetWidth){
						left = oMark.offsetWidth - oFloat.offsetWidth;
					}
					if(top <= 0){
						top = 0;
					}else if(top >= oMark.offsetHeight - oFloat.offsetHeight){
						top = oMark.offsetHeight - oFloat.offsetHeight;
					}
					oFloat.style.left = left + 'px';
					oFloat.style.top = top + 'px';
					
					//滑块在遮罩上的移动比例(当前所在位置 / （遮罩的宽 - 滑块的宽）)
					let pX = left / (oMark.offsetWidth - oFloat.offsetWidth);
					let pY = top / (oMark.offsetHeight - oFloat.offsetHeight);
					
					//控制大图显示
					oBigImg.style.left = - pX * (oBigImg.offsetWidth - oBigPicEnlarge.offsetWidth) + 'px';
					oBigImg.style.top = - pY * (oBigImg.offsetHeight - oBigPicEnlarge.offsetHeight) + 'px';
				}