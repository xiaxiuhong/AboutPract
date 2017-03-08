window.onload=function(){	
	function interTab(div_id,autoRun){
		var oTab=document.getElementById(div_id);
		var oUl_list=oTab.getElementsByClassName("tabList")[0];
		var aLi=oUl_list.getElementsByTagName("li");
		
		var oTabItem=oTab.getElementsByClassName("tabItem");
		var nT=0;
		var timer;
		
		//给每个li绑上点击切换事件
		for(var k=0;k<aLi.length;k++){
			aLi[k].index=k;
			aLi[k].onclick=function(){
				for(var y=0;y<aLi.length;y++){
					aLi[y].className="";
					oTabItem[this.index].style.display="none";
				};
				this.className="ac";
				oTabItem[this.index].style.display="block";
				nT=this.index;
			};
		};
		//自动切换
		if(autoRun){
			function skip(){
				timer=setInterval(function(){
					nT++;
				    if(nT==aLi.length){
						nT=0;
					};
					for(var y=0;y<aLi.length;y++){
						aLi[y].className="";
						oTabItem[y].style.display="none";
					};
					aLi[nT].className="ac";
				    oTabItem[nT].style.display="block";
				 },2000);
		    }
			 skip();
			//鼠标移入oTab盒时 动画停下
			oTab.onmouseover=function(){
				clearInterval(timer);
			};
			//鼠标移出的oTab盒时 动画继续
			oTab.onmouseout=function(){
				skip();
			};
	
		};
	};
	interTab("intTab",true);
}	
	
	
