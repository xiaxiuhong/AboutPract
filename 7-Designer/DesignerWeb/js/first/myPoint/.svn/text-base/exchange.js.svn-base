var order = {
	onClickfoot: function() {
//		cm.addChildHtml("html/first/MyPoint/PointReward.html");
		var  ckp_hwName= $("#userName").val();
		var ckp_phone = $("#phone").val();
		var  ckp_hwProvince = $("#pointsProvientId").val();
		var ckp_hwaddress = $("#addressId").val();
		var ckp_hwcommon= $("#commonId").val();
		var ckp_hwCity = $("#pointsCityId").val();
		var  cko_id=2;
		var paramsData ="cko_id="+cko_id+"&ckp_hwName="+ckp_hwName+"&ckp_phone="+ckp_phone+"&ckp_hwProvince="+ckp_hwProvince+"&ckp_hwaddress="+ckp_hwaddress+"&ckp_hwcommon="+ckp_hwcommon+"&ckp_hwCity="+ckp_hwCity;
		cm.getApi({
			url : "updatePointsShopping.do",
			data : paramsData,
			onsuccess : function(dt){
				if(dt.status == 200){
					cm.addChildHtml("html/first/MyPoint/PointReward.html");
				}else{
					alert(dt.msg);
				}
			},
			onerror : function(data){
				alert(data);	
			}
		})
	},
	province1Onclick:function(){
			$(this).toggleClass("img02");
		  $(".province1").slideToggle("slow");
	},
	province2Onclick:function(){
			$(this).toggleClass("img02");
		  $(".province2").slideToggle("slow");
	},
	province1click:function(){
		$(this).addClass("current").siblings().removeClass("current");
	$("#pointsProvientId").val($(this).text())
	},
	province2click:function(){
		$(this).addClass("current").siblings().removeClass("current");
	$("#pointsCityId").val($(this).text());
	}
	
};
$(function(){
	order.initProvince();
	
	
	
	
	
	$(".foot").click(order.onClickfoot);
	$(".message .arr1").click(order.province1Onclick);
	$(".message .arr2").click(order.province2Onclick);
	$(".province1 ul li").click(order.province1click);
	$(".province2 ul li").click(order.province2click);
})
