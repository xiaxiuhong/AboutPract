window.onload=function(){
	function MyTab(div_id){
		var oTab=document.getElementById(div_id);
		var oUl_list=oTab.getElementsByTagName("ul")[0];
		var aLi=oUl_list.getElementsByTagName("li");//导航
		
		var oTabItem=oTab.getElementsByClassName("tabItem");//内容
		//var n=0;
		for(var i=0;i<aLi.length;i++){
		
			aLi[i].onclick=function(){
				//关掉所有的li的ac  隐藏所有的div
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";
					oTabItem[j].style.display="none";
				};
				//打开自己的ac 打开指定div
				this.className="ac";
				n=this.index;
				oTabItem[this.index].style.display="block";
			};
			aLi[i].index=i;
		};
	};
	MyTab("tab");	
}
