
/*
	一、 创建元素
		1. 左右按钮  span    #ltBtn  #rtBtn
		2. ol    li ?   获取大图数量
		3. #msg   div
	二、轮播的方法
		1.大图
			所有的大图display = none
			当前的大图display = 'block'
		2.小圆点
			所有的小圆点background = red
			当前的小圆点background = blue
		3. 给文字信息的div添加文字信息
	三、添加事件
		1. 左按钮 onclick   indexA --  条件 indexA = length - 1;
		   右按钮 onclick   indexA ++  条件 indexA = 0;
		2. 小圆点： onmouseenter   indexA = 当前移入的下标值
	四、自动轮播
		计时器
		大盒子： 移入清除计时器、移出：启动自动轮播
		
		
	获取byId
	创建元素
*/
function Slider(id) {
	    //属性
		this.ele = $(id); //获取大盒子
		//获取所有的大图
		this.oUllis = this.ele.children[0].children;
		//获取大图数量
		this.num = this.oUllis.length;
		
		this.createEle = function(){
			//创建左按钮
			let oLtbtn = $create('span');
			oLtbtn.innerHTML = '&lt;';
			oLtbtn.id = 'ltBtn';
			this.ele.appendChild(oLtbtn);
			//创建右按钮
			let oRtBtn = $create('span');
			oRtBtn.innerHTML = '&gt;';
			oRtBtn.id = 'rtBtn';
			this.ele.appendChild(oRtBtn);
			//创建ol
			let ol = $create('ol');
			//创建一个放li的数组
			let arr = [];
			for(let i = 0;i < this.num;i ++){
				let li = $create('li');
				ol.appendChild(li);
				arr.push(li);
			}
			this.ele.appendChild(ol);
			//创建放置文字信息的div
			let div = $create('div');
			div.id = 'msg';
			this.ele.appendChild(div);
			
			return arr;
		}
		//创建页面所需元素并返回所有的ol中的li
		this.oOllis = this.createEle();
		
		this.slide = function(){
			//大图轮播
			for(let i = 0;i < this.num;i ++){
				//所有大图隐藏
				this.oUllis[i].style.display = 'none';
				//所有小圆点红色
				this.oOllis[i].style.background = 'red';
			}
			//当前大图显示
			this.oUllis[this.indexA].style.display = 'block';
			//当前小圆点蓝色
			this.oOllis[this.indexA].style.background = 'blue';
			//文字信息
			this.div = $('msg'); //获取文字信息的div
			//添加文字信息
			this.div.innerHTML = this.oUllis[this.indexA].firstElementChild.firstElementChild.alt;
		}
		//设置当前轮播图片的下标 
		this.indexA = 0;
		this.slide();
		
		this.addEvent = function(){
			//给左按钮添加点击事件
			this.ltBtn.onclick = function(){
				this.indexA --;
				if(this.indexA == -1){
					this.indexA = this.num - 1;
				}
				this.slide();
			}.bind(this);
			//给右按钮添加点击事件
			this.rtBtn.onclick = function(){
				this.indexA ++;
				if(this.indexA == this.num){
					this.indexA = 0;
				}
				this.slide();
			}.bind(this);
			//给小圆点添加移入事件
			for(let i = 0;i < this.num;i ++){
				this.oOllis[i].onmouseenter = function(){
					this.indexA = i;
					this.slide();
				}.bind(this);
			}
		}
		//获取左按钮
		this.ltBtn = $('ltBtn');
		//获取右按钮
		this.rtBtn = $('rtBtn');
		this.addEvent(); //调用添加事件的方法
		//计时器返回值
		this.timer = null;
		
		this.autoPlay = function(){
			this.timer = setInterval(()=>{
				this.indexA ++;
				if(this.indexA == this.num){
					this.indexA = 0;
				}
				this.slide();
			},3000)
			//给大盒子添加移入事件
			this.ele.onmouseenter = function(){
				clearInterval(this.timer);
			}.bind(this);
			//给大盒子添加移出事件
			this.ele.onmouseleave = function(){
				this.autoPlay();
			}.bind(this);
		}
		this.autoPlay();
}

//tools
function $(id){
	return document.getElementById(id);
}
function $create(tagName){
	return document.createElement(tagName);
}