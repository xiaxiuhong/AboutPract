var order = {
	onClickfootcon: function() {
		index.params['myPoint'] = $("#userSpanId").html();
		cm.addChildHtml("html/first/MyPoint/PointReward.html");
	},
	initDesignerInfo: function(ckp_type, divId) {
		var requestParams = "pageNow=1&pageCount=99999999&ckp_type=" + ckp_type;
		cm.getApi({
			url: 'getPointsList.do',
			data: requestParams,
			onsuccess: function(dt) {
				if (dt.status == 200) {
					order.inithqpoints(divId,dt.obj);
				} else {
					alert(dt.msg);
				}
			},
			onerror: function(data) {
				alert(data.msg);
			}
		});
	},
	inithqpoints : function(divId,obj){
		var html ="";
		for(var i=0;i<obj.length;i++){
			var o = obj[i];
			html += "<li><span>"+o.ckp_hwCommon+"<i>（+"+o.ckp_num+"）</i></span> <span>"+o.ckp_time.split(" ")[0]+"</span></li>";
		}
		$("#"+divId).html(html);
	},
	initUserPointsInfo : function(){
		cm.getApi({
			url : 'getWebDesignerDetailInfo.do',
			data : "",
			onsuccess: function(dt) {
				if (dt.status == 200) {
					var obj = dt.obj;
					var cku_userIntegration = obj.cku_userIntegration;
					index.params['cku_userIntegration'] = cku_userIntegration;
					var cku_levelIntegration = obj.cku_levelIntegration;
					$("#userSpanId").html(cku_userIntegration);
				} else {
					alert(dt.msg);
				}
			},
			onerror: function(data) {
				alert(data.msg);
			}
		});
	}
};
$(function() {
	//		Information.initDesignerInfo();
	document.getElementById("duihuans").addEventListener("click", order.onClickfootcon);
	$(".two").click(function() {
		$(this).toggleClass("img02");
		$(this).siblings(".thres").slideToggle("slow");
	});
	//获取用户详细信息
	order.initUserPointsInfo();
	//获取用户获取积分记录
	order.initDesignerInfo(1,"hqPointsUlId");
	//获取用户使用积分记录
	order.initDesignerInfo(2,"syPointsUlId");
})