var personalCenter = {
	initPersonalCenter : function(){
		cm.addChildHtml("html/first/personalCenter/personaInformation.html");
	},
	navtwocurrentl : function(){
		cm.addChildHtml("html/first/personalCenter/personaInformation.html");
	},
	ermyOrderr : function(){
		cm.addChildHtml("html/first/myOrder/myBill.html");
	},
	ermypoint : function(){
		cm.addChildHtml("html/first/MyPoint/MyPoint.html");
	},
	myComment : function(){
		cm.addChildHtml("html/first/myComment/myComment.html");
	}
};

$(function(){
	personalCenter.initPersonalCenter();
//	********个人中心******************
	document.getElementById("navtwocurrentl").addEventListener("click",personalCenter.navtwocurrentl);
	//	********我的订单******************
	document.getElementById("ermyOrderr").addEventListener("click",personalCenter.ermyOrderr);
	//	********我的积点******************
	document.getElementById("ermypoint").addEventListener("click",personalCenter.ermypoint);
	//	********我的评论******************
	document.getElementById("myComment").addEventListener("click",personalCenter.myComment);
	$(".navtwoT ul li").click(function(){
	   $(this).addClass("navtwocurrent").siblings("li").removeClass("navtwocurrent");
	   $(this).children("i").addClass("arrowD").parent("li").siblings().children("i").removeClass("arrowD");
	});
});
