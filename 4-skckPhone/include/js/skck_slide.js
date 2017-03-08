function getStyle(obj,styleName){
    var value=obj.currentStyle ? obj.currentStyle[styleName]:getComputedStyle(obj,false)[styleName];

    if (styleName=="opacity"){
        value=Math.round(parseFloat(value)*100);
    }else{
        value=parseInt(value);
    }
    return value;
}
//alert(getStyle(oDiv,"zIndex"));//必须先设置样式
//封装动画函数
function move(obj,modeJson,fn,time){
    var preSpeed={
        "verySlow":2000,
        "slow":1200,
        "normal":800,
        "fast":600,
        "veryFast":300
    };
    if (time){
        if (typeof time=="string"){
            time=preSpeed[time];
        }
    }else {
        time=preSpeed.normal;
    }

    //变化距离分段------------------------------
    var start={};
    var dis={};
    for(var key in modeJson){
        start[key]=getStyle(obj,key);
        dis[key]=modeJson[key]-start[key];
    }
    //console.log(start,dis);

    var count=parseInt(time/30);// 计数器：每一段时间
    var n=0;//计数器：初始步数
    clearInterval(obj.timer);

    //定时器------------------------------------
    obj.timer=setInterval(function(){
        n++;
        var a=1-n/count;
        for(var key in modeJson){
            //开始动画
            var step=start[key]+dis[key]*(1-a*a*a);// 每一次运动的步进长度

            if (key=="opacity"){//运动方式为透明度时  透明度渐变
                obj.style.opacity=step/100;
                obj.style.filter='alpha(opacity='+step+')';
            }else {
                obj.style[key]=step+"px";
            }
        }
        //停止动画
        if(n==count){
            clearInterval(obj.timer);
            fn && fn();
        }
    },30)
}
//轮播图(最新资讯)------------------------------------------
function slide(elmId,autoRun,showNum,number) {
    var oSlide = document.getElementById(elmId);
    var aLi = oSlide.getElementsByTagName("li");
    var oUl = oSlide.getElementsByTagName("ul")[0];
    var num=0;
    var timer;

    //ul设置宽度  让所有的图片横排
    var img_w = aLi[0].offsetWidth;//单个图片的宽度
    //console.log(img_w);
    oUl.style.width = aLi.length * img_w + "px";

    //前后按钮切换
    var pBtn = oSlide.children[0];
    var nBtn = oSlide.children[1];
    //前一个
    pBtn.onclick = function () {
        num--;
        if (num < 0) {
            num = 0;
        }
        move(oUl, {"left": -img_w * num});
    };
    //后一个
    nBtn.onclick = function () {
        num++;
        if (num >= number) {
            num = 0;
        }
        move(oUl, {"left": -img_w * num});
    };
    if(autoRun){
        //打开间隔定时器
        function skip(){
            timer=setInterval(function(){
                num++;
                //判断当n等于aImg.length时 返回循环
                if(num==number){
                    num=0;
                }
                move(oUl, {"left": -img_w * num});
            },2000);
        }
        skip();
        //鼠标移入oTab盒时 动画停下
        oSlide.onmouseenter=function(){
            clearInterval(timer);
        };
        //鼠标移出的oTab盒时 动画继续
        oSlide.onmouseleave=function(){
            skip();
        };
    }
}
//slide("adPicFun",1,0,2);
//轮播图2（寓教于乐）------------------------------
function slideFun(elmId,autoRun,showNum) {
    var oSlideF = document.getElementById(elmId);
    var aLi = oSlideF.getElementsByTagName("li");
    var oUl = oSlideF.getElementsByTagName("ul")[0];
    var num=0;
    var timer;

    //ul设置宽度  让所有的图片横排
    var Li_w = aLi[0].offsetWidth;//单个图片的宽度
    //console.log(Li_w);
    oUl.style.width = aLi.length * Li_w + "px";

    //前后按钮切换
    var pBtn = oSlideF.children[0];
    var nBtn = oSlideF.children[1];
    //前一个
    pBtn.onclick = function () {
        num--;
        if (num < 0) {
            num = 1;
        }
        move(oUl, {"left": -Li_w * num});
    };
    //后一个
    nBtn.onclick = function () {
        num++;
        if (num >= 2) {
            num = 0;
        }
        move(oUl, {"left": -Li_w * num});
    };
    if(autoRun){
        //打开间隔定时器
        function skip(){
            timer=setInterval(function(){
                num++;
                if(num==2){
                    num=0;
                }
                move(oUl, {"left": -Li_w * num});
            },2000);
        }
        skip();
        //鼠标移入oTab盒时 动画停下
        oSlideF.onmouseenter=function(){
            clearInterval(timer);
        };
        //鼠标移出的oTab盒时 动画继续
        oSlideF.onmouseleave=function(){
            skip();
        };
    }
}
//选项卡(国际牙医)-------------------------------
function MyTab(div_id,autoRun){
	var oTab=document.getElementById(div_id);
	var oUl_list=oTab.getElementsByTagName("ul")[0];
	var aLi=oUl_list.getElementsByTagName("li");
	var oTabItem=oTab.getElementsByClassName("tabItem");
	var n=0;
	var timer;
	
	//给每个li绑上点击切换事件
	for(var i=0;i<aLi.length;i++){
		aLi[i].onclick=function(){
			//关掉所有的li的ac 隐藏所有的div
			for(var j=0;j<aLi.length;j++){
				aLi[j].className="";
				oTabItem[j].style.display="none";
			};
			//打开自己的ac 打开指定div
			this.className="ac";
			oTabItem[this.index].style.display="block";
			n=this.index;
		};
		aLi[i].index=i;
	};
	//自动切换
	if(autoRun){
		  //打开间隔定时器
		function skip(){
			timer=setInterval(function(){
				n++;
			    if(n==aLi.length){
					n=0;
				};
				for(var j=0;j<aLi.length;j++){
					  aLi[j].className="";
					  oTabItem[j].style.display="none";
				};
				aLi[n].className="ac";
			    oTabItem[n].style.display="block";
			 },2000);
	    }
	 skip();
	//鼠标移入oTab盒时 动画停下
	    oTab.onmouseenter=function(){
			clearInterval(timer);
		};
	//鼠标移出的oTab盒时 动画继续
		oTab.onmouseleave=function(){
			skip();
		};
	};
};