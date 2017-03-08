var index = {
	params:{},
	initDivHtml:function(){
		//判断设计师是否已上传作品
		cm.getApi({
			url:"getDesignergrcollectionStatus.do",
			data : "",
			onsuccess : function(dt){
				if(dt.status == 200){
					cm.addHtml("html/myProduction/myProduction.html");
				}else if(dt.status == 0){
					cm.addHtml("html/myProduction/myProductionKong.html");
				}else{
					alert(dt.msg);
				}
			},
			onerror : function(data){
				alert(data);	
			}
		});
		
	},
	onClickonClickorderId : function(){
		cm.addHtml("html/ProjectBuilder/ProjectList.html");
	},
	onClicknavcurrentl: function(){
		cm.addHtml("html/first/personalCenter/personalCenterIndex.html");
	},
	onClickcollectionId : function(){
		cm.addHtml("html/myProduction/myProduction.html");
	},
	onClickorderId : function(){
		cm.addHtml("html/ProjectBuilder/ProjectList.html");
	},
	onClickchineDid : function(){
		cm.addHtml("html/chinaHand/Chineseguide.html");
	},
	onClickmessageId : function(){
		cm.addHtml("html/MessageCenter/systemMessages.html");
	}
};

$(function(){
	var leftheight = (window.screen.height - 150)+"px";
	$("#contextDivId").css("height", leftheight);
	//初始化页面
	index.initDivHtml();
	//工程列表頁面
	document.getElementById("orderId").addEventListener("click",index.onClickorderId);
	//個人中心
	document.getElementById("navcurrentl").addEventListener("click",index.onClicknavcurrentl);
	//中国通
	document.getElementById("chineDid").addEventListener("click",index.onClickchineDid);
	//設計師作品集
	document.getElementById("collectionId").addEventListener("click",index.onClickcollectionId);
	//消息中心
	document.getElementById("messageId").addEventListener("click",index.onClickmessageId);
	$(".nav ul li").click(function(){
		 $(this).addClass("name").siblings("li").removeClass("name");
		 $(this).children("i").addClass("arrowT").parent("li").siblings().children("i").removeClass("arrowT"); 
	})
});
